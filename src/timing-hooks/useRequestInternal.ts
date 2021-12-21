import { useEffect, useRef } from 'react';

type Delay = number | null;
type TimerHandler = (...args: any[]) => void;

export const useRequestInterval = (callback: TimerHandler, delay: Delay) => {
    const savedCallbackRef = useRef<TimerHandler>();
    useEffect(() => {
        savedCallbackRef.current = callback;
    }, [callback]);

    useEffect(() => {
        const handler = (...args: any[]) => {
            savedCallbackRef.current!(...args);
        };

        if (delay !== null) {
            const intervalId = requestInterval(handler, delay);
            return () => {
                clearRequestInterval(intervalId.value!);
            };
        }
    }, [delay]);
};

export const requestInterval = (fn: () => any, delay: number) => {
    let start = Date.now();
    const handle: { value?: number } = {};
    function loop() {
        const nowish = Date.now();
        handle.value = window.requestAnimationFrame(loop);
        if (nowish - start >= delay) {
            fn();
            start = nowish;
        }
    }
    handle.value = window.requestAnimationFrame(loop);
    return handle;
};

export const clearRequestInterval = (cancelId: number) => {
    window.cancelAnimationFrame(cancelId);
};

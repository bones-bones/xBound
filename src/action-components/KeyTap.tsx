import React, { useRef, useState } from 'react';
import KeyboardEventHandler from 'react-keyboard-event-handler';
import { useTimeout } from '../timing-hooks';

export const KeyTap: React.FC<{
    keyValue: string;
    time: number;
    successCallback: () => void;
    failureCallback: () => void;
    RenderableComponent: React.FC<{
        time: number;
        count: number;
        keyValue: string;
        active: boolean;
    }>;
}> = ({
    keyValue,
    time,
    successCallback,
    failureCallback,
    RenderableComponent,
}) => {
    const [count, setCount] = useState<number>(0);
    const [counting, setCounting] = useState<boolean>(true);
    const increment = useRef(() => {
        setCounting(false);
        if (count > 1) {
            successCallback();
        } else {
            failureCallback();
        }
    });

    useTimeout(increment.current, time);

    return (
        <>
            <RenderableComponent
                time={time}
                count={count}
                keyValue={keyValue}
                active={counting}
            />

            <KeyboardEventHandler
                handleKeys={[keyValue]}
                handleEventType="keydown"
                onKeyEvent={() => {
                    if (counting) {
                        setCount(count + 1);
                    }
                }}
            />
        </>
    );
};

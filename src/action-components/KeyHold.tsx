import React, { useState } from 'react';
import KeyboardEventHandler from 'react-keyboard-event-handler';
import { useRequestInterval } from '../timing-hooks';

export const KeyHold: React.FC<{
    keyValue: string;
    time: number;
    successCallback: () => void;
    failureCallback: () => void;
}> = ({ keyValue, time, successCallback, failureCallback }) => {
    const [timeCount, setTimeCount] = useState<number>(0);
    useRequestInterval(() => {
        if (listening) {
            setTimeCount(500 + timeCount);
            console.log(timeCount);
        }
    }, 500);

    const [listening, setListening] = useState<boolean>(false);

    return (
        <>
            <span>{keyValue}</span>
            {listening && <span>{getFilledDots(time, timeCount)}</span>}
            {!listening ? (
                <KeyboardEventHandler
                    handleKeys={[keyValue]}
                    handleEventType="keydown"
                    onKeyEvent={(_key, event) => {
                        console.log(event);
                        setTimeCount(0);
                        setListening(true);
                    }}
                />
            ) : (
                <KeyboardEventHandler
                    handleKeys={[keyValue]}
                    handleEventType="keyup"
                    onKeyEvent={() => {
                        console.log('event');

                        if (timeCount == time) {
                            successCallback();
                        } else {
                            failureCallback();
                        }

                        setListening(false);
                    }}
                />
            )}
        </>
    );
};

const getFilledDots = (time: number, timeCount: number) => {
    const timeTotal = time / 500;
    const timeCountTotal = timeCount / 500;

    return new Array(timeCountTotal)
        .fill('◉')
        .concat(new Array(Math.max(timeTotal - timeCountTotal, 0)).fill('〇'))
        .join('-');
};

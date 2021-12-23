import React, { useState } from 'react';
import KeyboardEventHandler from 'react-keyboard-event-handler';
import { useRequestInterval } from '../timing-hooks';

export const KeyHold: React.FC<{
    keyValue: string;
    time: number;
    successCallback: () => void;
    failureCallback: () => void;
    RenderableComponent: React.FC<{
        time: number;
        timeCount: number;
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
    const [timeCount, setTimeCount] = useState<number>(0);
    useRequestInterval(() => {
        if (listening) {
            setTimeCount(500 + timeCount);

            if (500 + timeCount > time) {
                failureCallback();
                setTimeCount(0);
            }
            console.log(timeCount);
        }
    }, 500);

    const [listening, setListening] = useState<boolean>(false);

    return (
        <>
            {
                <RenderableComponent
                    time={time}
                    timeCount={timeCount}
                    keyValue={keyValue}
                    active={listening}
                />
            }

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
                        setTimeCount(0);

                        setListening(false);
                    }}
                />
            )}
        </>
    );
};

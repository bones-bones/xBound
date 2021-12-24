import React, { useState } from 'react';
import styled from '@emotion/styled';
import KeyboardEventHandler from 'react-keyboard-event-handler';
import { useTimeout } from '../timing-hooks';

export const KeyOrder: React.FC<{
    chain: string[];
    time: number;
    successCallback: () => void;
    failureCallback: () => void;
    RenderableComponent: React.FC<{
        input: string[];
        chain: string[];
    }>;
}> = ({
    chain,
    time,
    successCallback,
    failureCallback,
    RenderableComponent,
}) => {
    const [input, setInput] = useState<string[]>([]);
    useTimeout(failureCallback, time);

    const uniqueKeys = chain.reduce((prev: string[], cur) => {
        if (!prev.includes(cur)) {
            prev.push(cur);
        }
        return prev;
    }, []);

    return (
        <>
            <KeyboardEventHandler
                handleKeys={uniqueKeys}
                onKeyEvent={(key) => {
                    const values = input.concat(key);
                    setInput(values);
                    let isValid = true;
                    for (let i = 0; i < values.length; i++) {
                        if (values[i] !== chain[i]) {
                            isValid = false;
                        }
                    }
                    if (!isValid) {
                        failureCallback();
                        setInput([]);
                        return;
                    }
                    if (chain.length === values.length) {
                        setInput([]);
                        successCallback();
                    }
                }}
            />

            <RenderableComponent input={input} chain={chain} />
        </>
    );
};

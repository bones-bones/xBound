import { keyframes } from '@emotion/react';
import styled from '@emotion/styled';
import React from 'react';
export const Tap = ({
    keyValue,
    count,
    active,
}: {
    keyValue: string;
    count: number;
    active: boolean;
}) => {
    const Circle = styled.div(({ activated }: { activated: boolean }) => ({
        borderRadius: '50px',
        border: '4px solid orange',
        width: '50px',
        height: '50px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontWeight: 'bold',
        fontSize: '30px',
        lineHeight: '30px',
        backgroundColor: 'yellow',
        ...(activated && { animation: `${anime} 0.3s ` }),
    }));

    const KeyContainer = styled.div(({ active }: { active: boolean }) => ({
        position: 'relative',
        top: '0px',
        left: '0px',
        backgroundColor: active ? 'blue' : 'grey',
        fontWeight: 'bold',
        color: 'white',
        height: '25px',
        width: '25px',
        fontSize: '18px',
        borderRadius: '15px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        animation: `${aButton} 0.3s`,
    }));

    return (
        <OuterContainer>
            <KeyContainer active={active}>
                {keyValue.toUpperCase()}
            </KeyContainer>
            <Container>
                <Circle activated={count > 0}>{count}</Circle>
            </Container>
        </OuterContainer>
    );
};
const Container = styled.div({
    height: '60px',
    width: '60px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
});
const OuterContainer = styled.div({
    height: '50px',
    width: '50px',
});
const anime = keyframes({
    '0%': {
        backgroundColor: 'red',
        width: '40px',
        height: '40px',
        fontSize: '25px',
    },
    '10%': {},
    '20%': {},
    '30%': {},
    '40%': {},
    '50%': {},
    '60%': {},
    '70%': {},
    '80%': {},
    '90%': {},
    '100%': {},
});

const aButton = keyframes({
    '0%': {
        backgroundColor: 'darkblue',
    },

    '90%': {},
    '100%': {},
});

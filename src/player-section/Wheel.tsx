import React from 'react';
import styled from '@emotion/styled';
import { keyframes } from 'emotion';

export const Wheel = ({
    rotation,
    hasRight,
}: {
    rotation: number;
    hasRight: boolean;
}) => {
    console.log(hasRight);
    return (
        <WheelContainer rotation={rotation} hasRight={hasRight}>
            <WheelNumber num={0}>0</WheelNumber>
            <WheelNumber num={1}>1</WheelNumber>
            <WheelNumber num={2}>2</WheelNumber>
            <WheelNumber num={3}>3</WheelNumber>
            <WheelNumber num={4}>4</WheelNumber>
            <WheelNumber num={5}>5</WheelNumber>
            <WheelNumber num={6}>6</WheelNumber>
            <WheelNumber num={7}>7</WheelNumber>
            <WheelNumber num={8}>8</WheelNumber>
            <WheelNumber num={9}>9</WheelNumber>
        </WheelContainer>
    );
};
export const HEIGHT = 26;

const DIST = HEIGHT / 2 / Math.tan(((36 / 2) * Math.PI) / 180);

const WheelContainer = styled.div(
    ({ rotation, hasRight }: { rotation: number; hasRight: boolean }) => ({
        transformStyle: 'preserve-3d',
        width: '25px',
        transform: ` rotateX(${rotation}deg)`,
        display: 'flex',
        height: `${HEIGHT}px`,
        boxSizing: 'content-box',
        alignItems: 'center',
        justifyContent: 'center',
        transition: 'transform linear 0.5s',
        ...(hasRight && { borderRight: '1px solid black' }),
    })
);

const WheelNumber = styled.div(({ num }: { num: number }) => ({
    transform: `rotateX(-${36 * num}deg) translateZ(${DIST}px)`,
    boxSizing: 'border-box',
    height: `${HEIGHT}px`,
    lineHeight: `${HEIGHT}px`,
    width: '25px',
    position: 'absolute',
    backgroundColor: '#FFA500',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'baseline',
}));

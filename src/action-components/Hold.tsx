import { keyframes } from '@emotion/react';
import styled from '@emotion/styled';
import React from 'react';
export const Hold = ({
    keyValue,
    time,
    timeCount,
    active,
}: {
    keyValue: string;
    time: number;
    timeCount: number;
    active: boolean;
}) => {
    return (
        <Container val={timeCount}>
            <ArrowContainer isActive={active}>
                {keyMappings[keyValue]}
            </ArrowContainer>
            {getFilledDots(time, timeCount)}
        </Container>
    );
};
const getFilledDots = (time: number, timeCount: number) => {
    const timeTotal = time / 500;
    const timeCountTotal = timeCount / 500;

    return new Array(timeCountTotal)
        .fill(undefined)
        .map((entry, index) => (
            <DotContainer key={index}>
                <Dot color={colors[index]} />
            </DotContainer>
        ))
        .concat(
            new Array(Math.max(timeTotal - timeCountTotal, 0)).fill(
                <DotContainer>
                    <Dot color={'black'} />
                </DotContainer>
            )
        );
};

// red yellow green
// RGB F00 FF0 0F0
// 3840 4080 240

const colors = ['#F00', '#FFA500', '#FF0', '#0F0'];
const shake = (intensity: number) => {
    const ver = (intensity > 0 ? 1 : 0) * intensity;
    return keyframes({
        '10%, 90%': {
            transform: `translate3d(0, ${ver}px, 0)`,
        },

        '20%, 80% ': {
            transform: `translate3d(0, -${ver}px, 0)`,
        },

        '30%, 50%, 70%': {
            transform: `translate3d(0, ${ver}px, 0)`,
        },

        '40%, 60%': {
            transform: `translate3d(0, -${ver}px, 0)`,
        },
    });
};

const keyMappings: Record<string, string> = {
    left: '⬅',
    right: '⮕',
    up: '⬆',
    down: '⬇',
};
const Container = styled.div(({ val }: { val: number }) => ({
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    backgroundColor: '#660000',
    width: '150px',
    borderRadius: '5px',
    border: '1px solid yellow',
    height: '30px',
    animation: `${shake(val / 250)} 0.5s infinite`,
}));
const ArrowContainer = styled.div(({ isActive }: { isActive: boolean }) => ({
    color: isActive ? 'black' : 'white',
}));

const DotContainer = styled.div({
    height: '20px',
    width: '20px',
    alignItems: 'center',
    display: 'flex',
});

const Dot = styled.div(({ color }: { color: string }) => ({
    height: color == 'black' ? '10px' : '20px',
    width: color == 'black' ? '10px' : '20px',
    backgroundColor: color,
    borderRadius: '15px',
}));

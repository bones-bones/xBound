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
        <Container>
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

const keyMappings: Record<string, string> = {
    left: '⬅',
    right: '⮕',
    up: '⬆',
    down: '⬇',
};
const Container = styled.div({
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    backgroundColor: '#660000',
    width: '150px',
    borderRadius: '5px',
    border: '1px solid yellow',
    height: '30px',
});
const ArrowContainer = styled.div(({ isActive }: { isActive: boolean }) => ({
    color: !isActive ? 'white' : 'black',
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

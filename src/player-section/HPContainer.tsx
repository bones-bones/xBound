import React from 'react';
import styled from '@emotion/styled';
import { HEIGHT, Wheel } from './Wheel';

interface Props {
    value: number;
    modifyNumber?: number;
}
export const HPContainer = ({ value, modifyNumber }: Props) => {
    const targetNumber = value - (modifyNumber || 0);

    const sourceNumbers = ('' + value)
        .split('')
        .map((entry) => parseInt(entry));

    const targetNumbers = ('' + targetNumber)
        .split('')
        .map((entry) => parseInt(entry));

    console.log(sourceNumbers, targetNumbers);
    return (
        <Container>
            <TextContainer>HP</TextContainer>
            <NumberContainer>
                {('' + value).split('').map((entry, i) => (
                    <Wheel
                        key={i}
                        rotation={+entry * 36}
                        hasRight={i < ('' + value).split('').length}
                    />
                ))}
            </NumberContainer>
        </Container>
    );
};

const TextContainer = styled.div({ display: 'flex' });
const Container = styled.div({
    fontFamily: 'Fipps',
    color: 'white',
    display: 'flex',
    height: `${HEIGHT}px`,
    alignItems: 'center',
});

const NumberContainer = styled.div({
    display: 'flex',
    color: 'black',
    overflow: 'hidden',
    border: '1px solid black',
    borderRadius: '5px',
});

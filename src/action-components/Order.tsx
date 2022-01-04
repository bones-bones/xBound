import React from 'react';
import styled from '@emotion/styled';
export const Order = ({
    input,
    chain,
}: {
    input: string[];
    chain: string[];
}) => {
    return (
        <BarContainer>
            {input.map((entry, i) => (
                <Character key={i} divColor="grey">
                    {keyMappings[entry]}
                </Character>
            ))}
            {
                <Character key={'open'} divColor="white">
                    {keyMappings[chain[input.length]]}
                </Character>
            }
            {chain.slice(input.length + 1).map((_e, i) => (
                <Character key={i} divColor="black">
                    ●
                </Character>
            ))}
        </BarContainer>
    );
};

const BarContainer = styled.div({
    height: '30px',
    width: '150px',
    backgroundColor: '#660000',
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    fontSize: '20px',
    borderRadius: '5px',
    border: '1px solid yellow',
    lineHeight: '30px',
});

const Character = styled.div(({ divColor }: { divColor: string }) => ({
    color: divColor,
    height: '30px',
    width: '20px',
}));

const keyMappings: Record<string, string> = {
    left: '⬅',
    right: '⮕',
    up: '⬆',
    down: '⬇',
};

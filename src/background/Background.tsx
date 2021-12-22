import { generate as generateGeoPattern } from 'geopattern';
import React from 'react';
import styled from '@emotion/styled';

export const Background: React.FunctionComponent = ({ children }) => {
    const tempSrc = generateGeoPattern(undefined).toDataUrl();

    return (
        <StyledBackground tempSrc={tempSrc}>
            <Bar place={'top'} />
            {children}
            <Bar place={'bottom'} />
        </StyledBackground>
    );
};

const StyledBackground = styled.div(({ tempSrc }: { tempSrc: string }) => ({
    backgroundImage: tempSrc,
    width: '100vw',
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    zIndex: -2,
}));
const Bar = styled.div(({ place }: { place: 'top' | 'bottom' }) => ({
    backgroundColor: 'black',
    height: '10vh',
    width: '100vw',
    position: 'absolute',
    // zIndex: -1,
    ...(place === 'top' ? { top: '0px' } : { bottom: '0px' }),
}));

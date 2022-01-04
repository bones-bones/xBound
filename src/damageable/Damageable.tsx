import React from 'react';
import styled from '@emotion/styled';
import { keyframes } from 'emotion';

export const Damageable: React.FC<{
    damage?: boolean;
    RenderableComponent: JSX.Element;
}> = ({ RenderableComponent, damage }) => {
    return <Container damage={damage}>{RenderableComponent}</Container>;
};

const animation = keyframes({
    '0%': {
        filter: `url("data:image/svg+xml,${encodeURIComponent(`<svg xmlns='http://www.w3.org/2000/svg'>
    <filter id="linear">
    <feColorMatrix
    id="aa"
      type="matrix"
      values="1 0 0 1 1
              0 1 0 0 0
              0 0 1 0 0
              0 0 0 0 1"/>
    <feComposite in='aa' in2='SourceGraphic' operator='in'/>
  </filter></svg>`)}#linear")`,
    },
});

const Container = styled.div(({ damage }: { damage?: boolean }) => ({
    ...(damage && { animation: `${animation} 0.5s` }),
    display: 'flex',
    flexDirection: 'column',
}));

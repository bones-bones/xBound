import React from 'react';
import styled from '@emotion/styled';

export const StarBar = () => {
    return (
        <Container>
            <BarContainer>
                <div>{'⭐️'}</div>
                <PointBar>
                    <div>{'⭐️'}</div>
                    <div>{'⭐️'}</div>
                </PointBar>
                <WrapperBar barHeight={450}>
                    <FilledBar barHeight={300} />
                </WrapperBar>
            </BarContainer>
        </Container>
    );
};

const PointBar = styled.div({
    display: 'flex',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    flexDirection: 'column',
    position: 'absolute',
    height: '450px',
    width: '20px',
});

const FilledBar = styled.div(({ barHeight }: { barHeight: number }) => ({
    height: barHeight,
    width: '20px',

    background: `repeating-linear-gradient(
          45deg,
          #AA0000,
          #AA0000 10px,
          #DDDDDD 10px,
          #DDDDDD 20px
        );
        `,
}));
const Container = styled.div({
    right: '20px',
    position: 'fixed',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
});

const WrapperBar = styled.div(({ barHeight }: { barHeight: number }) => ({
    width: '20px',
    height: barHeight,
    display: 'flex',
    alignItems: 'flex-end',
    backgroundColor: '#660000',
}));

const BarContainer = styled.div({
    borderRadius: '10px',
    overflow: 'hidden',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
});

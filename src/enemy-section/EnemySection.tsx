import React from 'react';
import styled from '@emotion/styled';
import Building from '../images/building.png';
import { Targetable } from '../targetable';

export const EnemySection = () => {
    return (
        <Container>
            <Targetable>
                <img src={Building} width={'600px'} height={'325px'} />
            </Targetable>
        </Container>
    );
};

const Container = styled.div({
    display: 'flex',
    alignItems: 'center',
    width: '60%',
    height: '60%',
});

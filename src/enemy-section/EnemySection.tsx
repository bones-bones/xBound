import React from 'react';
import styled from '@emotion/styled';
import { Targetable } from '../targetable';
import { useSelector } from 'react-redux';
import { selectBattle } from '../battlefield';
import { getEnemyDefinitionForId } from '../data/enemy-characters/definition';

export const EnemySection = () => {
    const battle = useSelector(selectBattle);
    const enemy = battle.enemies[0];
    const info = getEnemyDefinitionForId(enemy.id);
    return (
        <Container>
            <Targetable>
                <img src={info.image} height={'300px'} alt={info.id} />
            </Targetable>
        </Container>
    );
};

const Container = styled.div({
    display: 'flex',
    justifyContent: 'center',
    width: '100%',
    height: '60%',
});

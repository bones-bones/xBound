import React from 'react';
import styled from '@emotion/styled';
import { Background } from '../background';
import { PlayerSection } from '../player-section';
import { StarBar } from '../star-bar';
import { Menu } from './Menu';
import { EnemySection } from '../enemy-section';

export const Battlefield = () => {
    return (
        <>
            <Background>
                <Menu />
                <EnemySection />
                <StarBar />
                <PlayerSection />
            </Background>
        </>
    );
};

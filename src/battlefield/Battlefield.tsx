import React from 'react';
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

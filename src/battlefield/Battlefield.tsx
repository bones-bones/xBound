import React from 'react';
import styled from '@emotion/styled';
import { Background } from '../background';
import { PlayerSection } from '../player-section';
import { StarBar } from '../star-bar';
import { Menu } from './Menu';

export const Battlefield = () => {
    return (
        <>
            <Background>
                <Zdiv>
                    <Menu />
                    <EnemySection />
                    <StarBar />
                    <PlayerSection />
                </Zdiv>
            </Background>
        </>
    );
};

const EnemySection = styled.div();
const Zdiv = styled.div();

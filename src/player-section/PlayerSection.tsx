import React from 'react';
import styled from '@emotion/styled';
import { generate as generateGeoPattern } from 'geopattern';

import { Targetable } from '../targetable';
import { useSelector } from 'react-redux';
import { selectStats } from '../stats';
import { getCharacterDefinitionForId } from '../data/player-characters/definitions';
import { KeyHold } from '../action-components/KeyHold';
import { Hold } from '../action-components/Hold';
import { KeyTap } from '../action-components/KeyTap';
import { Tap } from '../action-components/Tap';
import { KeyOrder } from '../action-components/KeyOrder';
import { Order } from '../action-components/Order';
import { Damageable } from '../damageable';
import { HPContainer } from './HPContainer';

export const PlayerSection = () => {
    const playerStats = useSelector(selectStats);
    return (
        <PlayerRow>
            {playerStats.characters.map((entry) => {
                return <CharacterElement key={entry.id} character={entry} />;
            })}
        </PlayerRow>
    );
};

const PlayerRow = styled.div({
    display: 'flex',
    flexDirection: 'row',
    zIndex: 1,
    justifyContent: 'space-evenly',
    bottom: '0px',
    alignItems: 'flex-end',
    position: 'fixed',
    width: '1000px',
});

const CharacterElement = ({
    character: { id, hp, sp },
}: {
    character: { id: string; hp: number; sp: number };
}) => {
    const characterDefinition = getCharacterDefinitionForId(id);
    const tempSrc = generateGeoPattern(characterDefinition.name, {
        color: '#FFA500',
    }).toDataUrl();
    return (
        <CharacterContainer>
            {id === 'car' && (
                <KeyHold
                    keyValue="left"
                    time={2000}
                    successCallback={() => console.log('good')}
                    failureCallback={() => console.log('bad')}
                    RenderableComponent={Hold}
                />
            )}
            {id === 'horse' && (
                <KeyTap
                    keyValue="a"
                    time={1000}
                    successCallback={() => console.log('good')}
                    failureCallback={() => console.log('bad')}
                    RenderableComponent={Tap}
                />
            )}
            {id === 'vending' && (
                <KeyOrder
                    time={10000}
                    successCallback={() => console.log('good')}
                    failureCallback={() => console.log('bad')}
                    chain={['up', 'down', 'left', 'right']}
                    RenderableComponent={Order}
                />
            )}
            <Targetable>
                <Damageable
                    damage={true}
                    RenderableComponent={
                        <>
                            <CharacterImage src={characterDefinition.image} />
                            <CharacterDiv tempSrc={tempSrc}>
                                <Name>{characterDefinition.name}</Name>
                                <HPContainer value={hp} modifyNumber={-5} />
                                <SP value={sp} />
                            </CharacterDiv>
                        </>
                    }
                ></Damageable>
            </Targetable>
        </CharacterContainer>
    );
};

const Name = styled.span({ color: 'darkred', fontWeight: 'bold' });

const CharacterContainer = styled.div({
    width: '160px',
    display: 'flex',
    flexDirection: 'column',
});
const CharacterImage = styled.img({ width: '160px' });
const CharacterDiv = styled.div(({ tempSrc }: { tempSrc: string }) => ({
    background: tempSrc,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundSize: '100px',
    height: '100px',
    border: '3px solid white',
    borderRadius: '15px',
}));

const SP = ({ value }: { value: number }) => {
    return (
        <SPContainer>
            <SPText>SP</SPText> {value}
        </SPContainer>
    );
};

const SPContainer = styled.div({
    display: 'block',
    fontFamily: 'Fipps',
});

const SPText = styled.span({ color: 'white' });

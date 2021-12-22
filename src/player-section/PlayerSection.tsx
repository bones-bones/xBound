import React from 'react';
import styled from '@emotion/styled';
import { generate as generateGeoPattern } from 'geopattern';

import { Targetable } from '../targetable';
import { useSelector } from 'react-redux';
import { selectStats } from '../stats';
import { getCharacterDefinitionForId } from '../data/player-characters/definitions';

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
            <Targetable>
                <CharacterImage src={characterDefinition.image} />
                <CharacterDiv tempSrc={tempSrc}>
                    <Name>{characterDefinition.name}</Name>
                    <HP value={hp} />
                    <SP value={sp} />
                </CharacterDiv>
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

const HP = ({ value }: { value: number }) => {
    return (
        <HPContainer>
            <HPText>HP</HPText> {value}
        </HPContainer>
    );
};

const HPContainer = styled.div({
    display: 'block',
    fontFamily: 'Fipps',
});

const HPText = styled.span({ color: 'white' });

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

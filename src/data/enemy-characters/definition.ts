import BuildingPicture from '../../images/building.png';
interface Definition {
    hp: number;
    id: string;
    moves: string[];
    image: string;
}

const definitionMappings: Record<string, Definition> = {
    building: {
        id: 'building',
        hp: 200,
        moves: ['TEST'],
        image: BuildingPicture,
    },
};

export const getEnemyDefinitionForId = (id: string) => definitionMappings[id];

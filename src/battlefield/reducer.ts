import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { getEnemyDefinitionForId } from '../data/enemy-characters/definition';

interface Enemy {
    id: string;
    hp: number;
}

const initialState: InitStatState = {
    enemies: [{ id: 'building', hp: 200 }],
};

interface InitStatState {
    enemies: Enemy[];
    target?: string;
}

export const { actions, reducer } = createSlice({
    name: 'battle',
    initialState,
    reducers: {
        loadInitial: (
            state,
            { payload }: PayloadAction<{ enemies: string[] }>
        ) => {
            state.enemies = payload.enemies.map((entry) => {
                const enemy = getEnemyDefinitionForId(entry);
                return { hp: enemy.hp, id: entry };
            });
        },
    },
});

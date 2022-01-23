import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Character {
    id: string;
    hp: number;
    sp: number;
}

const initialState: InitStatState = {
    totalSp: 0,
    characters: [
        { id: 'car', hp: 200, sp: 30 },
        { id: 'horse', hp: 146, sp: 100 },
        { id: 'vending', hp: 90, sp: 6 },
    ],
};

interface InitStatState {
    totalSp: number;
    characters: Character[];
}

export const { actions, reducer } = createSlice({
    name: 'stats',
    initialState,
    reducers: {
        loadInitial: (state, { payload }: PayloadAction<{ value: number }>) => {
            state.totalSp = payload.value;
        },
        dealDamage: (
            state,
            {
                payload: { target, value },
            }: PayloadAction<{ target: string; value: number }>
        ) => {
            const targetCharacter = state.characters.find(
                ({ id }) => id === target
            );

            if (targetCharacter) {
                targetCharacter.hp -= value;
            }
        },
    },
});

import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState: InitStatState = {
    totalSp: 0,
};

interface InitStatState {
    totalSp: number;
}

export const { actions, reducer } = createSlice({
    name: 'battle',
    initialState,
    reducers: {
        loadInitial: (state, { payload }: PayloadAction<{ value: number }>) => {
            state.totalSp = payload.value;
        },
    },
});

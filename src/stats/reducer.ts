import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState = {};

export const { actions, reducer } = createSlice({
    name: 'battle',
    initialState,
    reducers: {
        loadInitial: (state, { payload }) => {
            //n
        },
    },
});

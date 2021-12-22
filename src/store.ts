import { combineReducers, configureStore } from '@reduxjs/toolkit';

import { reducer as statsReducer } from './stats';
import { reducer as battleReducer } from './battlefield';

export const store = configureStore({
    reducer: combineReducers({
        stats: statsReducer,
        battle: battleReducer,
    }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

import { configureStore } from '@reduxjs/toolkit';
import gameSlice from './features/game/game-slice';
import trophySlice from './features/trophy/trophy-slice';

export const store = configureStore({
    reducer: {
        gameSlice: gameSlice,
        trophySlice: trophySlice,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

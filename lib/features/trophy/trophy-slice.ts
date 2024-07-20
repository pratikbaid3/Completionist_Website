import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import TrophyModel from './model/trophy-model';
import axios from 'axios';
import GameModel from '../game/model/game-model';

interface TrophyState {
    trophyList: TrophyModel[];
    currentgame: GameModel | null;
}

const initialState: TrophyState = {
    trophyList: [],
    currentgame: null,
};

const trophySlice = createSlice({
    name: 'Trophy',
    initialState,
    reducers: {
        setCurrentGame: (state, action: PayloadAction<GameModel>) => {
            console.log(action.payload.game_name);
            state.currentgame = action.payload;
        },
        clearSelectedGameData: (state) => {
            state.currentgame = null;
            state.trophyList = [];
        },
    },

    extraReducers: (builder) => {
        builder
            .addCase(getTrophyList.pending, () => {
                console.log('Operation Pending');
            })
            .addCase(
                getTrophyList.fulfilled,
                (state, action: PayloadAction<TrophyModel[]>) => {
                    console.log('Operation Fulfilled');
                    console.log(action.payload);
                    state.trophyList = action.payload;
                }
            );
    },
});

export const getTrophyList = createAsyncThunk(
    'game/getTrophyList',
    async (game: string) => {
        const result = await axios.get(
            `http://localhost:8000/api/ps4/guide/${game}`,
            {
                headers: {
                    'Content-Type': 'application/json;charset=UTF-8',
                    'Access-Control-Allow-Origin': '*',
                },
            }
        );
        return result.data.result;
    }
);

export const { setCurrentGame, clearSelectedGameData } = trophySlice.actions;
export default trophySlice.reducer;

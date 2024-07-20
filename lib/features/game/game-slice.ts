import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import GameModel from './model/game-model';
import axios from 'axios';

interface GameState {
    games: GameModel[];
}

const initialState: GameState = {
    games: [],
};

const gameSlice = createSlice({
    name: 'Game',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getGameList.pending, () => {
                console.log('Operation Pending');
            })
            .addCase(
                getGameList.fulfilled,
                (state, action: PayloadAction<GameModel[]>) => {
                    console.log('Operation Fulfilled');
                    state.games = action.payload;
                }
            );
    },
});

export const getGameList = createAsyncThunk('game/getGameList', async () => {
    const result = await axios.get(
        `http://localhost:8000/api/ps4/games?page=1&search=Assa`,
        {
            headers: {
                'Content-Type': 'application/json;charset=UTF-8',
                'Access-Control-Allow-Origin': '*',
            },
        }
    );
    return result.data.results;
});

export default gameSlice.reducer;

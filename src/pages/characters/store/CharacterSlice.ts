import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Character } from '../models/Character.model'

interface CharacterSliceProps {
    characters: Character[],
    loading: boolean,
    page: number,
}

const initialState: CharacterSliceProps = {
    characters: [],
    loading: true,
    page: 1,
}

export const characterSlice = createSlice({
    name: 'character',
    initialState,
    reducers: {
        changeLoading: (state, action: { payload: boolean }) => {
            state.loading = action.payload
        },
        saveCharacters: (state, action: PayloadAction<Character[]>) => {
            state.characters = action.payload
        },
        savePage: (state, action: { payload: number }) => {
            state.page = action.payload
        }
    }
})

export const { changeLoading, saveCharacters, savePage } = characterSlice.actions;
export default characterSlice.reducer;
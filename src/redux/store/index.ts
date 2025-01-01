import { configureStore } from "@reduxjs/toolkit";
import { characterSlice } from "../../pages/characters/store/CharacterSlice";

export const store = configureStore({
    reducer: {
        characters: characterSlice.reducer
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch


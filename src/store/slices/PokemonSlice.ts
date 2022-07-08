import { createSlice } from '@reduxjs/toolkit';

import { Pokemon } from '@/types';

type State = {
  captured: Pokemon[];
  selectedPokemon?: Pokemon;
};

const initialState: State = {
  captured: [],
  selectedPokemon: undefined,
};

export const pokemonSlice = createSlice({
  name: 'pokemon',
  initialState,
  reducers: {
    capture: (state, action) => {
      state.captured = [...state.captured, action.payload];
    },
    selectPokemon: (state, action) => {
      state.selectedPokemon = action.payload;
    },
  },
});

export const { capture, selectPokemon } = pokemonSlice.actions;

export default pokemonSlice.reducer;

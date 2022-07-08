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
    free: (state, action) => {
      const newCaptured = [...state.captured];
      const pokemonToRemoveIndex = newCaptured.findIndex(
        (pokemon) => pokemon.id === action.payload
      );
      if (pokemonToRemoveIndex < 0) {
        return;
      }

      newCaptured.splice(pokemonToRemoveIndex, 1);
      state.captured = newCaptured;
    },
  },
});

export const { capture, selectPokemon, free } = pokemonSlice.actions;

export default pokemonSlice.reducer;

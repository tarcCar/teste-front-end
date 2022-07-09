import { createSlice } from '@reduxjs/toolkit';

import { Pokemon } from '@/types';

type State = {
  captured: Pokemon[];
  selectedPokemon?: Pokemon;
  pokemonToEdit?: Pokemon;
};

const initialState: State = {
  captured: [],
  selectedPokemon: undefined,
  pokemonToEdit: undefined,
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
    setPokemonToEdit: (state, action) => {
      state.pokemonToEdit = action.payload;
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
    updatePokemon: (state, action) => {
      const newCaptured = [...state.captured];
      const { pokemon, idToUpdate } = action.payload;

      const pokemonToUpdateIndex = newCaptured.findIndex(
        (pokemon) => pokemon.id === idToUpdate
      );

      if (pokemonToUpdateIndex < 0) {
        return;
      }

      newCaptured[pokemonToUpdateIndex] = pokemon;
      state.captured = newCaptured;
      state.selectedPokemon = pokemon;
    },
  },
});

export const { capture, selectPokemon, free, setPokemonToEdit, updatePokemon } =
  pokemonSlice.actions;

export default pokemonSlice.reducer;

import { createSlice } from '@reduxjs/toolkit';

import { Pokemon } from '@/types';

type State = {
  captured: Pokemon[];
};

const initialState: State = {
  captured: [],
};

export const pokemonSlice = createSlice({
  name: 'pokemon',
  initialState,
  reducers: {
    capture: (state, action) => {
      console.log({
        state,
        action,
      });

      state.captured = [...state.captured, action.payload];
    },
  },
});

export const { capture } = pokemonSlice.actions;

export default pokemonSlice.reducer;

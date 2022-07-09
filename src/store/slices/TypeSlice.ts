import { createSlice } from '@reduxjs/toolkit';

type State = {
  types: string[];
};

const initialState: State = {
  types: [],
};

export const typesSlice = createSlice({
  name: 'pokemon',
  initialState,
  reducers: {
    setTypes: (state, action) => {
      state.types = action.payload;
    },
  },
});

export const { setTypes } = typesSlice.actions;

export default typesSlice.reducer;

import { createSlice } from '@reduxjs/toolkit';

type State = {
  status: 'wait' | 'search' | 'error';
  isSearching: boolean;
  isWaiting: boolean;
  isOnError: boolean;
};

const initialState: State = {
  status: 'wait',
  isSearching: false,
  isWaiting: false,
  isOnError: false,
};

export const playerSlice = createSlice({
  name: 'pokemon',
  initialState,
  reducers: {
    setStatus: (state, action) => {
      const status = action.payload;
      state.status = action.payload;
      console.log({ status });

      if (status === 'wait') {
        state.isOnError = false;
        state.isSearching = false;
        state.isWaiting = true;
        return;
      }

      if (status === 'search') {
        state.isOnError = false;
        state.isWaiting = false;
        state.isSearching = true;
        return;
      }

      if (status === 'error') {
        state.isWaiting = false;
        state.isSearching = false;
        state.isOnError = true;
      }
    },
  },
});

export const { setStatus } = playerSlice.actions;

export default playerSlice.reducer;

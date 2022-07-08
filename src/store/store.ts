import { configureStore } from '@reduxjs/toolkit';

import pokemonSlice from './slices/PokemonSlice';

const store = configureStore({
  reducer: {
    pokemon: pokemonSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

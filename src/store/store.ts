import { configureStore } from '@reduxjs/toolkit';

import pokemonSlice from './slices/PokemonSlice';
import typesSlice from './slices/TypeSlice';

const store = configureStore({
  reducer: {
    pokemon: pokemonSlice,
    types: typesSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

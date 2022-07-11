import { configureStore } from '@reduxjs/toolkit';

import playerSlice from './slices/PlayerSlice';
import pokemonSlice from './slices/PokemonSlice';
import typesSlice from './slices/TypeSlice';

const store = configureStore({
  reducer: {
    pokemon: pokemonSlice,
    types: typesSlice,
    player: playerSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

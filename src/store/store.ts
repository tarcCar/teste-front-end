import { configureStore } from '@reduxjs/toolkit'
import pokemonSlice from './slices/PokemonSlice'

const store = configureStore({
  reducer: {
    pokemon: pokemonSlice
  },
})

export default store

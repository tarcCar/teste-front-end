import { Pokemon } from '@/types'
import { createSlice } from '@reduxjs/toolkit'

type State = {
  captured: Pokemon[]
}

const initialState: State = {
  captured: []
}

export const pokemonSlice = createSlice({
  name: 'pokemon',
  initialState,
  reducers: {
    capture: (state, action) => {
      state.captured = [...state.captured, action.payload]
    },
  },
})

export const { capture } = pokemonSlice.actions

export default pokemonSlice.reducer

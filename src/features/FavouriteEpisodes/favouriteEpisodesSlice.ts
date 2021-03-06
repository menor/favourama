import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { xor } from 'lodash'

// Types
type TFavouriteEpisodesState = {
  favouriteEpisodes: number[]
}

const initialState: TFavouriteEpisodesState = {
  favouriteEpisodes: []
}

// Reducer
const favouriteEpisodes = createSlice({
  name: 'favouriteEpisodes',
  initialState,
  reducers: {
    toggleFav: favToggled
  }
})


// Action Handlers
function favToggled(
  state: TFavouriteEpisodesState,
  action: PayloadAction<number>
) {
  state.favouriteEpisodes = xor(state.favouriteEpisodes, [action.payload])
  // Sorting every time is not ideal from a performance standpoint
  // but this array is not going to get very big anyways
  state.favouriteEpisodes.sort()
}

export const { toggleFav } = favouriteEpisodes.actions

export default favouriteEpisodes.reducer

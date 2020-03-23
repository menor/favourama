import { createSlice, PayloadAction } from '@reduxjs/toolkit'

// Types
export type TDisplayFiltersState = {
  showFavs: boolean
  showUnfavs: boolean
}

// Reducer
const initialState = {
  showFavs: false,
  showUnfavs: true
}

const displayFilters = createSlice({
  name: 'displayFilters',
  initialState,
  reducers: {
    toggleShowFavs: showFavsToggled,
    toggleShowUnfavs: showUnfavsToggled
  }
})

// Action Handlers
function showFavsToggled (state: TDisplayFiltersState, _action: PayloadAction) {
  state.showFavs = !state.showFavs
}

function showUnfavsToggled (
  state: TDisplayFiltersState,
  _action: PayloadAction
) {
  state.showUnfavs = !state.showUnfavs
}

export const { toggleShowFavs, toggleShowUnfavs } = displayFilters.actions

export default displayFilters.reducer

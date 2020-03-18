import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type TDisplayFiltersState = {
  showFavs: boolean
  showUnfavs: boolean
}

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

function showFavsToggled(
  state: TDisplayFiltersState,
  _action: PayloadAction
) {
  state.showFavs = !state.showFavs
}

function showUnfavsToggled(
  state: TDisplayFiltersState,
  _action: PayloadAction
) {
  state.showUnfavs = !state.showUnfavs
}

export const {
  toggleShowFavs,
  toggleShowUnfavs
} = displayFilters.actions

export default displayFilters.reducer

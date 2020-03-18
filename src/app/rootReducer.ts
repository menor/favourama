import { combineReducers } from '@reduxjs/toolkit'

import episodesReducer from '../features/EpisodesList/episodesSlice'
import favouriteEpisodesReducer from '../features/FavouriteEpisodes/favouriteEpisodesSlice'
import displayFiltersReducer from '../features/DisplayFilters/DisplayFiltersSlice'

const rootReducer = combineReducers({
  displayFilters: displayFiltersReducer,
  episodes: episodesReducer,
  favouriteEpisodes: favouriteEpisodesReducer
})

export type TRootState = ReturnType<typeof rootReducer>

export default rootReducer

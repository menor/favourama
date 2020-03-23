import { isEmpty, difference } from 'lodash/fp'
import { createSelector } from 'reselect'

import { TRootState } from './rootReducer'
import { TEpisode } from '../api/tvmazeAPI'
import { TDisplayFiltersState } from '../features/DisplayFilters/DisplayFiltersSlice'

// Simple selectors
export const displayFiltersSelector = (state: TRootState) =>
  state.displayFilters

export const episodesSelector = (state: TRootState) =>
  state.episodes.episodesById

export const episodesLoadingSelector = (state: TRootState) =>
  state.episodes.isLoading

export const episodesIdsSelector = (state: TRootState) =>
  Object.keys(state.episodes.episodesById).map(id => parseInt(id, 10))

export const favouritesSelector = (state: TRootState) => {
  return state.favouriteEpisodes.favouriteEpisodes
}

// Multi-slice selectors
export const displayableEpisodesSelector = createSelector(
  [
    episodesSelector,
    episodesIdsSelector,
    favouritesSelector,
    displayFiltersSelector
  ],

  (
    episodes: Record<number, TEpisode>,
    episodesIds: number[],
    favouritesIds: number[],
    { showFavs, showUnfavs }: TDisplayFiltersState
  ) => {
    if (isEmpty(episodesIds)) {
      return []
    }
    if (!showUnfavs && !showFavs) {
      return []
    }
    if (!showUnfavs && showFavs) {
      return favouritesIds.map(favouriteId => episodes[favouriteId])
    }
    if (showUnfavs && !showFavs) {
      return difference(episodesIds, favouritesIds).map(id => episodes[id])
    }
    return episodesIds.map(id => episodes[id])
  }
)

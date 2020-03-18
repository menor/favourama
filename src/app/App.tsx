import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { TRootState } from '../app/rootReducer'
import Header from '../components/Header'
import EpisodesListPage from '../features/EpisodesList/episodesListPage'
import { fetchEpisodes } from '../features/EpisodesList/episodesSlice'
import {
  toggleShowFavs,
  toggleShowUnfavs
} from '../features/DisplayFilters/DisplayFiltersSlice'

const App = () => {
  // Not sure about all this stuff here, maybe put it
  // in a layout container?
  const dispatch = useDispatch()
  const {
    displayFilters: { showFavs, showUnfavs }
  } = useSelector((state: TRootState) => {
    return state
  })

  useEffect(
    () => {
      dispatch(fetchEpisodes())
    },
    [dispatch]
  )

  const onFav = () => {
    dispatch(toggleShowFavs())
  }

  const onUnfav = () => {
    dispatch(toggleShowUnfavs())
  }

  return (
    <div className="sans-serif">
      <Header
        favFilterActive={showFavs}
        unfavFilterActive={showUnfavs}
        onFavFilterClick={onFav}
        onUnfavFilterClick={onUnfav}
      />
      <EpisodesListPage />
    </div>
  )
}

export default App

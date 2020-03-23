import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'

import Header from '../components/Header'
import EpisodesListPage from '../features/EpisodesList/episodesListPage'
import DisplayFilters from '../features/DisplayFilters/DisplayFilters'

import { fetchEpisodes } from '../features/EpisodesList/episodesSlice'

const App = () => {
  const dispatch = useDispatch()

  useEffect(
    () => {
      dispatch(fetchEpisodes())
    },
    [dispatch]
  )

  return (
    <div className="sans-serif">
      <Header />
      <DisplayFilters />
      <EpisodesListPage />
    </div>
  )
}

export default App

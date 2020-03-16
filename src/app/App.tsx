import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { TRootState } from './rootReducer'

import EpisodesListPage from '../features/EpisodesList/episodesListPage'
import { fetchEpisodes } from '../features/EpisodesList/episodesSlice'

const App = () => {
  const dispatch = useDispatch()
  const {
    episodes: { episodesById }
  } = useSelector((state: TRootState) => {
    return state
  })

  // TODO: This should depend on the filters
  const visibleEpisodes = Object.keys(episodesById)

  const displayableEpisodes =
    visibleEpisodes.length > 0
      ? visibleEpisodes.map(episodeId => episodesById[+episodeId])
      : []

  useEffect(
    () => {
      dispatch(fetchEpisodes())
    },
    [dispatch]
  )

  return (
    <div className="sans-serif">
      <EpisodesListPage items={displayableEpisodes} />
    </div>
  )
}

export default App

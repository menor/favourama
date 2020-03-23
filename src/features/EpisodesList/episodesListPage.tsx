import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import {
  episodesLoadingSelector,
  favouritesSelector,
  displayableEpisodesSelector
} from '../../app/selectors'

import { toggleFav } from '../FavouriteEpisodes/favouriteEpisodesSlice'

import EpisodesList from './EpisodesList'

const EpisodesListPage = () => {
  const dispatch = useDispatch()

  const visibleEpisodes = useSelector(displayableEpisodesSelector)
  const favouriteEpisodesIds = useSelector(favouritesSelector)
  const isLoading = useSelector(episodesLoadingSelector)

  const isFav = (id: number) => favouriteEpisodesIds.includes(id)

  const onFav = (episodeId: string) => {
    dispatch(toggleFav(parseInt(episodeId, 10)))
  }

  if (isLoading) {
    return <p>Loading ...</p>
  }
  return <EpisodesList items={visibleEpisodes} onFav={onFav} isFav={isFav} />
}

export default EpisodesListPage

import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { isEmpty, difference } from 'lodash/fp'
import { createSelector } from 'reselect'

import { TRootState } from '../../app/rootReducer'
import { toggleFav } from '../FavouriteEpisodes/favouriteEpisodesSlice'

import EpisodesList from './EpisodesList'

// TEMP: selector
const getEpisodes = (state: TRootState) => state.episodes.episodesById
const getEpisodesIds = (state: TRootState) =>
  Object.keys(state.episodes.episodesById).map(id => parseInt(id, 10))
const getFavourites = (state: TRootState) => {
  return state.favouriteEpisodes.favouriteEpisodes
}
const getDisplayFilters = (state: TRootState) => state.displayFilters

const getVisibleEpisodes = createSelector(
  [getEpisodes, getEpisodesIds, getFavourites, getDisplayFilters],
  (episodes, episodesIds, favouritesIds, { showFavs, showUnfavs }) => {
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

// End selector

const EpisodesListPage = () => {
  const dispatch = useDispatch()

  const visibleEpisodes = useSelector(getVisibleEpisodes)

  const {
    favouriteEpisodes: { favouriteEpisodes }
  } = useSelector((state: TRootState) => {
    return state
  })

  const isFav = (id: number) => favouriteEpisodes.includes(id)

  const onFav = (episodeId: string) => {
    dispatch(toggleFav(parseInt(episodeId, 10)))
  }

  if (visibleEpisodes.length > 0) {
    return <EpisodesList items={visibleEpisodes} onFav={onFav} isFav={isFav} />
  }
  return (
    <section className={st.episodeList}>
      <p className={st.noEpisodes}>No episodes matching your filter(s)</p>
    </section>
  )
}

const st = {
  card: `
    pa1
    w-100
    w-50-m
    w-25-ns
    mb2
`,
  innerCard: `
    flex
    flex-wrap
    pa2
    ba
    b--light-gray
    shadow-hover
  `,
  episodeList: `
    flex
    flex-wrap
    w-100
    pa3
  `,
  meta: `
    mt2
    w-90
  `,
  title: `
    f4
    fw4
    mv1
  `,
  episodeNumber: `
    f5
    fw4
    mt0
  `,
  like: `
   w-10 
   mt3
   flex
   items-end
  `,
  noEpisodes: `
    center
    f3
    pt6
    silver
  `
}

type EpisodeImage = {
  medium: string
  original: string
}

type EpisodeSelfLink = {
  href: string
}

type EpisodeLink = {
  self: EpisodeSelfLink
}

export type TEpisode = {
  id: string
  url: string
  name: string
  season: number
  number: number
  airdate: string
  airtime: string
  airstamp: string
  runtime: number
  image: EpisodeImage
  summary: string
  _links: EpisodeLink
}

type EpisodeListProps = {
  items: TEpisode[]
  // isFav: Function
  onFav: Function
}

export default EpisodesListPage

import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { favouritesSelector, displayableEpisodesSelector } from '../../app/selectors'

import { toggleFav } from '../FavouriteEpisodes/favouriteEpisodesSlice'

import EpisodesList from './EpisodesList'

const EpisodesListPage = () => {
  const dispatch = useDispatch()

  const visibleEpisodes = useSelector(displayableEpisodesSelector)
  const favouriteEpisodesIds = useSelector(favouritesSelector)

  const isFav = (id: number) => favouriteEpisodesIds.includes(id)

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

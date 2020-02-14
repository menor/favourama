import React, { useState, useEffect, MouseEvent } from 'react'
import { xor } from 'lodash/fp'
import FuturamaApi from '../apis'
import Header from './Header'
import EpisodeList, { TEpisode } from './EpisodeList'

const App = () => {
  const [episodes, setEpisodes] = useState<TEpisode[] | []>([])
  const [favourites, setFavourite] = useState<Number[]>([])
  const [showFavs, setShowFavs] = useState<boolean>(true)
  const [showUnfavs, setShowUnfavs] = useState<boolean>(true)

  const showFavouriteEpisodes = () => {
    return episodes.filter(e => favourites.includes(e.id))
  }

  const showUnfavouriteEpisodes = () => {
    return episodes.filter(e => !favourites.includes(e.id))
  }

  const getVisibleEpisodes = () => {
    if (showFavs && showUnfavs) {
      return episodes
    }

    if (showFavs) {
      return showFavouriteEpisodes()
    }

    if (showUnfavs) {
      return showUnfavouriteEpisodes()
    }

    return episodes
  }

  const onFav = (fav: number) => {
    setFavourite(prev => {
      return xor(prev, [fav])
    })
  }

  const onFavFilterClick = (e: MouseEvent) => {
    setShowFavs(prev => !prev)
  }

  const onUnfavFilterClick = (e: MouseEvent) => {
    setShowUnfavs(prev => !prev)
  }

  const isFav = (id: number) => {
    return favourites.includes(id)
  }

  async function fetchData() {
    const episodes: TEpisode[] = await FuturamaApi.get('episodes').json()
    setEpisodes(episodes)
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <div className="sans-serif">
      <Header
        favFilterActive={showFavs}
        unfavFilterActive={showUnfavs}
        onFavFilterClick={onFavFilterClick}
        onUnfavFilterClick={onUnfavFilterClick}
      />
      <EpisodeList isFav={isFav} onFav={onFav} items={getVisibleEpisodes()} />
    </div>
  )
}

export default App

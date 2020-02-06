import React, { useState, useEffect } from 'react'
import { xor } from 'lodash/fp'
import FuturamaApi from '../apis'
import Header from './Header'
import EpisodeList, { TEpisode } from './EpisodeList'

const App = () => {
  const [episodes, setEpisodes] = useState<TEpisode[] | []>([])
  const [favourites, setFavourite] = useState<Number[]>([])

  const onFav = (fav: number) => {
    setFavourite(prev => {
      return xor(prev, [fav])
    })
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
      <Header />
      <EpisodeList isFav={isFav} onFav={onFav} items={episodes} />
    </div>
  )
}

export default App

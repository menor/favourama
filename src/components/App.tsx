import React, { useState, useEffect } from 'react'
import FuturamaApi from '../apis'
import Header from './Header'

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

type Episode = {
  id: number
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
  items: Episode[]
}

// We need to wrap this list inside a fragment until the issue is solved
// in definitivleyTyped
// https://github.com/DefinitelyTyped/DefinitelyTyped/issues/20356
const EpisodeList = (props: EpisodeListProps) => {
  if (props.items) {
    return (
      <>
        {' '}
        {props.items.map((e: Episode) => (
          <section key={e.id}>
            <img src={e.image.medium} alt={`Futurama - ${e.name}`} />
            <div className="meta">
              <p>{e.name}</p>
              <p>{`S${e.season}E${e.number}`}</p>
            </div>
          </section>
        ))}
      </>
    )
  }
  return null
}

const App = () => {
  const [episodes, setEpisodes] = useState<Episode[] | []>([])

  async function fetchData() {
    const episodes: Episode[] = await FuturamaApi.get('episodes').json()
    setEpisodes(episodes)
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <div className="sans-serif">
      <Header />
      <EpisodeList items={episodes} />
    </div>
  )
}

export default App

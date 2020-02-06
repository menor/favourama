import React from 'react'
import Heart from './Heart'

// We need to wrap this list inside a fragment until the issue is solved
// in definitivleyTyped
// https://github.com/DefinitelyTyped/DefinitelyTyped/issues/20356
const EpisodeList = (props: EpisodeListProps) => {
  if (props.items) {
    return (
      <section className={st.episodeList}>
        {' '}
        {props.items.map((e: TEpisode) => {
          return (
            <section className={st.card} key={e.id}>
              <img
                className={st.screenshot}
                src={e.image.medium}
                alt={`Futurama - ${e.name}`}
              />
              <div className={st.meta}>
                <h1 className={st.title}>{e.name}</h1>
                <h2 className={st.episodeNumber}>{`S${e.season}E${
                  e.number
                }`}</h2>
              </div>
              <div className={st.like}>
                <span
                  onClick={() => {
                    props.onFav(e.id)
                  }}
                >
                  <Heart solid={props.isFav(e.id)} />
                </span>
              </div>
            </section>
          )
        })}
      </section>
    )
  }
  return null
}

const st = {
  card: `
    flex
    flex-wrap
    pa2
    w-100
    mh1
    mb4
    b--light-gray
    ba
    shadow-hover
`,
  episodeList: `
    flex
    flex-wrap
    pa3 
    center
  `,
  screenshot: `
    w-100
    center
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
  items: TEpisode[]
  isFav: Function
  onFav: Function
}

export default EpisodeList

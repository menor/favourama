import React from 'react'
import Heart from '../../components/Heart'
import Screenshot from '../../components/Screenshot'

// We need to wrap this list inside a fragment until the issue is solved
// in definitivleyTyped
// https://github.com/DefinitelyTyped/DefinitelyTyped/issues/20356
const EpisodesListPage = (props: EpisodeListProps) => {
  if (props.items.length > 0) {
    return (
      <section className={st.episodeList}>
        {' '}
        {props.items.map((e: TEpisode) => {
          return (
            <article className={st.card} key={e.id}>
              <div className={st.innerCard}>
                <Screenshot src={e.image.medium} alt={`Futurama - ${e.name}`} />
                <div className={st.meta}>
                  <h1 className={st.title}>{e.name}</h1>
                  <h2 className={st.episodeNumber}>{`S${e.season}E${
                    e.number
                  }`}</h2>
                </div>
                <div className={st.like}>
                </div>
              </div>
            </article>
          )
        })}
      </section>
    )
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
  items: Record<number, TEpisode>
  // isFav: Function
  // onFav: Function
}

export default EpisodesListPage


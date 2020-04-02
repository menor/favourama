import React from 'react'

import { TEpisode } from '../../api/tvmazeAPI'
import Heart from '../../components/Heart'
import Screenshot from '../../components/Screenshot'

// We need to wrap this list inside a fragment until the issue is solved
// in definitivleyTyped
// https://github.com/DefinitelyTyped/DefinitelyTyped/issues/20356
const EpisodeList = (props: EpisodeListProps) => {
  if (props.items.length > 0) {
    return (
      <section className={st.episodeList}>
        {' '}
        {props.items.map((e: TEpisode) => {
          return (
            <article className={st.card} key={e.id}>
              <div className={st.innerCard}>
                <Screenshot src={e.image.original} alt={`Futurama - ${e.name}`} />
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

type EpisodeListProps = {
  items: TEpisode[]
  isFav: Function
  onFav: Function
}

export default EpisodeList


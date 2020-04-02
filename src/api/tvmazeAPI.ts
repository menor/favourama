import ky from 'ky'

const api = ky.create({
  prefixUrl: 'https://api.tvmaze.com/shows/538'
})

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

export type TEpisodesResult = TEpisode[]

export async function getEpisodes(): Promise<TEpisode[]> {
  return api.get('episodes').json()
}

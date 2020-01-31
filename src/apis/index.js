import ky from 'ky'

export default ky.create({
  prefixUrl: 'http://api.tvmaze.com/shows/538'
})


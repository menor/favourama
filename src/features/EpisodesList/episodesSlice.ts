import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { TEpisode, TEpisodesResult, getEpisodes } from '../../api/tvmazeAPI'
import { AppThunk } from '../../app/store'

type TEpisodesState = {
  episodesById: Record<number, TEpisode>
  isLoading: boolean
  error: string | null
}

const initialState: TEpisodesState = {
  episodesById: {},
  isLoading: false,
  error: null
}

const episodes = createSlice({
  name: 'episodes',
  initialState,
  reducers: {
    getEpisodesStart: loadingStarted,
    getEpisodesSuccess: getEpisodesSuccessHandler,
    getEpisodesFailure: loadingFailed
  }
})

function loadingStarted(state: TEpisodesState) {
  state.isLoading = true
}

function loadingFailed(state: TEpisodesState, action: PayloadAction<string>) {
  state.isLoading = false
  state.error = action.payload
}

function getEpisodesSuccessHandler(
  state: TEpisodesState,
  { payload }: PayloadAction<TEpisodesResult>
) {
  state.isLoading = false
  state.error = null
  payload.forEach(episode => {
    // TODO: Maybe use S01E01 as id instead of the ID coming from tv maze
    state.episodesById[episode.id] = episode
  })
}

export const {
  getEpisodesStart,
  getEpisodesSuccess,
  getEpisodesFailure
} = episodes.actions

export default episodes.reducer

export const fetchEpisodes = (): AppThunk => async dispatch => {
  console.log('fetching')
  try {
    dispatch(getEpisodesStart())
    const episodes = await getEpisodes()
    console.log('episodes dispatch', episodes)
    dispatch(getEpisodesSuccess(episodes))
  } catch (err) {
    dispatch(getEpisodesFailure(err.toString()))
  }
}

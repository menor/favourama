import { createSlice } from '@reduxjs/toolkit'

import { TEpisode } from '../../api/tvmazeAPI'

let initialState: TEpisode | [] = []

const episodesDisplaySlice = createSlice({
  name: 'episodesDisplay',
  initialState,
  reducers: {

  }
})

import { combineReducers } from '@reduxjs/toolkit'

import episodesReducer from '../features/EpisodesList/episodesSlice' 

const rootReducer = combineReducers({
  episodes: episodesReducer
})

export type TRootState = ReturnType<typeof rootReducer>

export default rootReducer

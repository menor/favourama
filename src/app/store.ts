import { configureStore, Action } from '@reduxjs/toolkit'
import { ThunkAction } from 'redux-thunk'
import throttle from 'lodash/throttle'

import rootReducer, { TRootState } from './rootReducer'
import { loadFromLocalStorage, saveToLocalStorage } from '../tools/localStorage'

const store = configureStore({
  reducer: rootReducer,
  preloadedState: loadFromLocalStorage()

})

store.subscribe(
  throttle(() => {
    saveToLocalStorage({
      episodes: store.getState().episodes,
      favouriteEpisodes: store.getState().favouriteEpisodes
    })
  }, 1000)
)

if (process.env.NODE_ENV === 'development' && module.hot) {
  module.hot.accept('./rootReducer', () => {
    const newRootReducer = require('./rootReducer').default
    store.replaceReducer(newRootReducer)
  })
}

export type AppDispatch = typeof store.dispatch

export type AppThunk = ThunkAction<void, TRootState, unknown, Action<string>>

export default store

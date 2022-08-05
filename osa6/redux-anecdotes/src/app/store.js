import { configureStore, createStore } from '@reduxjs/toolkit'
import anecdoteReducer from '../reducers/anecdoteReducer'

export const store = configureStore({
  reducer: { magic: anecdoteReducer }
});

// export const store = createStore(anecdoteReducer)
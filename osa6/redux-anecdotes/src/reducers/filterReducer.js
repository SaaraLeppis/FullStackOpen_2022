import { createSlice } from '@reduxjs/toolkit'

const initialState = ''

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    listFilter(state, action) {
      state = action.payload
      return state
    }
  }
})

export const { listFilter } = filterSlice.actions
export default filterSlice.reducer

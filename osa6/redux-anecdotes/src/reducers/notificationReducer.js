import { createSlice } from "@reduxjs/toolkit"

const initialState = ''

const notificationSlice = createSlice({
  name: 'notification',
  initialState,
  reducers: {
    showNotification(state, action) {
      state = action.payload
      return state
    },
    hideNotification() {
      return initialState
    }
  }
})

export const { hideNotification, showNotification } = notificationSlice.actions

export default notificationSlice.reducer

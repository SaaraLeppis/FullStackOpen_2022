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

export const setNote = (message, showSeconds) => {
  return dispatch => {
    dispatch(showNotification(message))
    setTimeout(() => dispatch(hideNotification()), showSeconds * 1000)
  }

}
export default notificationSlice.reducer

import { createSlice } from "@reduxjs/toolkit"

const initialState = ''
let timeoutId

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
    if (timeoutId) {
      clearTimeout(timeoutId)
    }
    dispatch(showNotification(message))
    timeoutId = setTimeout(() => dispatch(hideNotification()), showSeconds * 1000)
  }

}
export default notificationSlice.reducer

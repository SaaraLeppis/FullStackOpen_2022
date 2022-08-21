import React from 'react'

const Notification = ({ message }) => {
  if (message === null) {
    return null
  }
  return (
    <div className="notification">
      <p className={message.type}>{message.message}</p>
    </div>
  )
}
export default Notification

import React from 'react';
import Notification from './Notification';
import PropTypes from 'prop-types'

const LoginForm = ({ notification, handleLogin, username, password, addUsername, addPassword }) => {
  return (
    <div className='log_in'>
      <h2>Log in to application</h2>

      {notification && <Notification message={notification} />}

      <form onSubmit={handleLogin}>
        <div className='inputs-wrapper'>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={addUsername}
          />
          <label htmlFor="password">Password: </label>
          <input
            type='password'
            id="password"
            value={password}
            onChange={addPassword}
          />
        </div>
        <div>
          <button type="submit">login</button>
        </div>
      </form>
    </div>
  )
};
LoginForm.propTypes = {
  handleLogin: PropTypes.func.isRequired,
  username: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  addUsername: PropTypes.func.isRequired,
  addPassword: PropTypes.func.isRequired
}

export default LoginForm;
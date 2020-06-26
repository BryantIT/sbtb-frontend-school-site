import React from 'react';
import { connect } from 'react-redux';
import { logout } from '../../actions/users/currentUser';
import { withRouter } from 'react-router-dom';

const Logout = ({ logout, history }) => {

  return (
    <form onSubmit={(event) => {
        event.preventDefault()
        logout()
        history.push('/')}
      }>
      <input className="button-link" type="submit" value="Logout" />
    </form>
  )
}

export default withRouter(connect(null, { logout })(Logout))

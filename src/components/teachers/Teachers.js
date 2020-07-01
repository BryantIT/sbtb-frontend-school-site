import React from 'react';
import { connect } from 'react-redux';
import Login from '../users/Login';

const Teachers = ({ currentUser }) => {

  return (
    currentUser ?
    <div>
      <h1>Teachers</h1>
    </div>:

    <div>
      <Login />
    </div>

  )
}

const mapStateToProps = ({ currentUser }) => {
  return {
    currentUser
  }
}

export default connect(mapStateToProps)(Teachers)

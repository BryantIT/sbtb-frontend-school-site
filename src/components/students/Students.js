import React from 'react';
import { connect } from 'react-redux';
import Login from '../users/Login';

const Students = ({ currentUser }) => {

  return (
    currentUser ?
    <div>
      <h1>Students</h1>
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

export default connect(mapStateToProps)(Students)

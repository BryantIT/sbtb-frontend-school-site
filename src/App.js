import React, { Component } from 'react';
import './App.css';
import Nav from './components/nav/Nav';
import MainContainer from './components/MainContainer';
import Login from './components/users/Login';
import Students from './components/students/Students';
import { Route, Switch, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { getCurrentUser } from './actions/users/currentUser';


class App extends Component {

  componentDidMount(){
    this.props.getCurrentUser()
  }

  render() {
    return (
      <div>
        <Nav />
        <Switch>
          <Route exact path='/' component={MainContainer} />
          <Route exact path='/students' component={Students} />

        </Switch>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return ({
    loggedIn: !!state.currentUser
  })
}

export default withRouter(connect(mapStateToProps, {getCurrentUser})(App));

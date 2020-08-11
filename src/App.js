import React, { Component } from 'react';
import './App.css';
import Nav from './components/nav/Nav';
import MainContainer from './components/MainContainer';
import Students from './components/students/Students';
import Parents from './components/parents/Parents';
import Teachers from './components/teachers/Teachers';
import Events from './components/events/Events';
import { Route, Switch, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { getCurrentUser } from './actions/users/currentUser';
import { getEvents } from './actions/events/events';
import { getNewsletters } from './actions/newsletters/newsletters';


class App extends Component {

  componentDidMount(){
    this.props.getCurrentUser()
    this.props.getEvents()
    this.props.getNewsletters()
  }

  render() {
    return (
      <div>
        <Nav />
        <Switch>
          <Route exact path='/' component={MainContainer} />
          <Route exact path='/students' component={Students} />
          <Route exact path='/parents' component={Parents} />
          <Route exact path='/teachers' component={Teachers} />
          <Route exact path='/events' component={Events} />

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

export default withRouter(connect(mapStateToProps, {getCurrentUser, getEvents, getNewsletters})(App));

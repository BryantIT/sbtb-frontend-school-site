import React, { Component } from 'react';
import './App.css';
import Nav from './components/nav/Nav';
import Home from './components/home/Home';
import Posts from './components/posts/Posts';
import Newsletter from './components/newsletter/Newsletter';
import Events from './components/events/Events';
import Footer from './components/footer/Footer';
import Login from './components/users/Login';
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
        <Home />
        <Posts />
        <Newsletter />
        <Events />
        <Footer />
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

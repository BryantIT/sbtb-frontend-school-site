import React, { Component } from 'react';
import './App.css';
import Nav from './components/nav/Nav'
import Home from './components/home/Home'
import { Route, Switch, withRouter  } from 'react-router-dom';


class App extends Component {
  render() {
    return (
      <div>
        <Nav />
        <Home />
        <h1>This is App.js</h1>
      </div>
    );
  }
}

export default App;

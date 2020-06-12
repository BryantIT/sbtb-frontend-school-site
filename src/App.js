import React, { Component } from 'react';
import './App.css';
import Nav from './components/nav/Nav';
import Home from './components/home/Home';
import Posts from './components/posts/Posts';
import Newsletter from './components/newsletter/Newsletter';
import { Route, Switch, withRouter  } from 'react-router-dom';


class App extends Component {
  render() {
    return (
      <div>
        <Nav />
        <Home />
        <Posts />
        <Newsletter />
        <h1>This is App.js</h1>
      </div>
    );
  }
}

export default App;

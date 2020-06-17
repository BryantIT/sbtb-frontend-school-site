import React, { Component } from 'react';
import './App.css';
import Nav from './components/nav/Nav';
import Home from './components/home/Home';
import Posts from './components/posts/Posts';
import Newsletter from './components/newsletter/Newsletter';
import Events from './components/events/Events';
import Footer from './components/footer/Footer';
import { Route, Switch, withRouter  } from 'react-router-dom';


class App extends Component {
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

export default App;

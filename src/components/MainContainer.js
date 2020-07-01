import React, { Component } from 'react';
import Home from './home/Home';
import Posts from './posts/Posts';
import Newsletter from './newsletter/Newsletter';
import Events from './events/Events';
import Footer from './footer/Footer';


class MainContainer extends Component {
  render() {
    return(
      <div>
        <Home />
        <Posts />
        <Newsletter />
        <Events />
        <Footer />
      </div>
    )
  }
}

export default MainContainer

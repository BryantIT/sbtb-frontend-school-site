import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import Login from '../users/Login';
import Logout from '../users/Logout';

const Nav = ({ currentUser }) => {
  return (
    currentUser ?
    <header id="header">
		<div className="container">
			<a href="index.html" id="logo" title="Welcome Tigers!">Bayside High School</a>
			<div className="menu-trigger"></div>
			<nav id="menu">
				<ul>
          <li><a href="gallery.html">Students</a></li>
					<li><a href="events.html">Parents</a></li>
          <li><a href="gallery.html">Teachers</a></li>
 				</ul>
				<ul>
          <li><a href="events.html">Events</a></li>
          <li><a href="events.html">Clubs</a></li>
					<li><a href="gallery.html">Gallery</a></li>
          <Logout />
   				</ul>
			</nav>
		</div>
	</header> :

  <header id="header">
  <div className="container">
    <a href="index.html" id="logo" title="Welcome Tigers!">Bayside High School</a>
    <div className="menu-trigger"></div>
    <nav id="menu">
      <ul>
        <li><a href="gallery.html">Students</a></li>
        <li><a href="events.html">Parents</a></li>
        <li><a href="gallery.html">Teachers</a></li>
      </ul>
      <ul>
        <li><a href="events.html">Events</a></li>
        <li><a href="events.html">Clubs</a></li>
        <li><a href="gallery.html">Gallery</a></li>
        <Login />
        </ul>
    </nav>
  </div>
</header>

  )
}

const mapStateToProps = ({ currentUser }) => {
  return {
    currentUser
  }
}

export default connect(mapStateToProps)(Nav)

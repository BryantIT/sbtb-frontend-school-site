import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import Login from '../users/Login';
import Logout from '../users/Logout';

const Nav = ({ currentUser }) => {
  return (
    <header id="header">
		<div className="container">
			<NavLink id="logo" title="Welcome Tigers!" to='/'>Bayside High School</NavLink>
			<div className="menu-trigger"></div>
			<nav id="menu">
				<ul>
          <li><NavLink to='/students'>Students</NavLink></li>
					<li><a href="events.html">Parents</a></li>
          <li><a href="gallery.html">Teachers</a></li>
 				</ul>
				<ul>
          <li><a href="events.html">Events</a></li>
          <li><a href="events.html">Clubs</a></li>
					<li><a href="gallery.html">Gallery</a></li>
          <li><a href="gallery.html"><Logout /></a></li>

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

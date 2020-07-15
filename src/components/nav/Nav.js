import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

const Nav = () => {
  return (
    <header id="header">
		<div className="container">
			<NavLink id="logo" title="Welcome Tigers!" to='/'>Bayside High School</NavLink>
			<div className="menu-trigger"></div>
			<nav id="menu">
				<ul>
          <li><NavLink to='/students'>Students</NavLink></li>
					<li><NavLink to='/parents'>Parents</NavLink></li>
          <li><NavLink to='/teachers'>Teachers</NavLink></li>
 				</ul>
				<ul>
        <li><NavLink to='/events'>Events</NavLink></li>
        <li><NavLink to='/parents'>Clubs</NavLink></li>
        <li><NavLink to='/teachers'>Gallery</NavLink></li>

   				</ul>
			</nav>
		</div>
	</header>
  )
}



export default Nav

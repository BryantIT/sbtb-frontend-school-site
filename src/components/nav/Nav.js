import React from 'react';
import { NavLink } from 'react-router-dom';

const Nav = () => {
  return (
    <header id="header">
		<div class="container">
			<a href="index.html" id="logo" title="HarrisonHighSchool">HarrisonHighSchool</a>
			<div class="menu-trigger"></div>
			<nav id="menu">
				<ul>
          <li><a href="gallery.html">Students</a></li>
					<li><a href="events.html">Parents</a></li>
					<li><a href="events.html">Events</a></li>
 				</ul>
				<ul>
					<li><a href="gallery.html">Teachers</a></li>
					<li><a href="gallery.html">Gallery</a></li>
					<li><a href="#fancy" class="get-contact">Contact</a></li>
   				</ul>
			</nav>
		</div>
	</header>
  )
}

export default Nav

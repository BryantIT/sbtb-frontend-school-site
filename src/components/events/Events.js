import React from 'react'

const Events = () => {
  return (
    <div>
      <section className="events">
		<div className="container">
			<h2>Upcoming events</h2>
			<article>
				<div className="current-date">
					<p>April</p>
					<p className="date">15</p>
				</div>
				<div className="info">
					<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
					<a className="more" href="#">Read more</a>
				</div>
			</article>
			<article>
				<div className="current-date">
					<p>April</p>
					<p className="date">17</p>
				</div>
				<div className="info">
					<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
					<a className="more" href="#">Read more</a>
				</div>
			</article>
			<article>
				<div className="current-date">
					<p>April</p>
					<p className="date">25</p>
				</div>
				<div className="info">
					<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
					<a className="more" href="#">Read more</a>
				</div>
			</article>
			<article>
				<div className="current-date">
					<p>April</p>
					<p className="date">29</p>
				</div>
				<div className="info">
					<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad.</p>
					<a className="more" href="#">Read more</a>
				</div>
			</article>
			<div className="btn-holder">
				<a className="btn blue" href="#">See all upcoming events</a>
			</div>
		</div>
    </div>
  )
}

export default Events

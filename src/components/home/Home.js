import React from 'react';

const Home = () => {
  return (
    <div className="slider">
		<ul className="bxslider">
			<li>
				<div className="container">
					<div className="info">
						<h2>Welcome Back to <br /><span>Bayside High</span></h2>
						<a href="#">Check out what's new</a>
					</div>
				</div>
			</li>
			<li>
				<div className="container">
					<div className="info">
						<h2>It’s Time to <br /><span>Get back to school</span></h2>
						<a href="#">Check out our new programs</a>
					</div>
				</div>
			</li>
			<li>
				<div className="container">
					<div className="info">
						<h2>It’s Time to <br /><span>Get back to school</span></h2>
						<a href="#">Check out our new programs</a>
					</div>
				</div>
			</li>
		</ul>
		<div className="bg-bottom"></div>
	</div>
  )
}

export default Home

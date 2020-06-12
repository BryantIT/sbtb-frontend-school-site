import React from 'react'

const Newsletter = () => {
  return (
    <section className="news">
		<div className="container">
			<h2>Latest news</h2>
			<article>
				<div className="pic"><img src="images/1.png" alt="" /></div>
				<div className="info">
					<h4>Newsletter Title </h4>
					<p className="date">14 APR 2014, Jason Bang</p>
					<p>Blah Blah Blah, newsletter body, blah blah blah</p>
					<a className="more" href="#">Read more</a>
				</div>
			</article>
			<article>
				<div className="pic"><img src="images/1_1.png" alt="" /></div>
				<div className="info">
					<h4>Omnis iste natus error sit voluptatem accusantium </h4>
					<p className="date">14 APR 2014, Jason Bang</p>
					<p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores (...)</p>
					<a className="more" href="#">Read more</a>
				</div>
			</article>
			<div className="btn-holder">
				<a className="btn" href="#">See archival news</a>
			</div>
		</div>
	</section>
  )
}

export default Newsletter

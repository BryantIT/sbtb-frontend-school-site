import React from 'react';

const Footer = () => {
  return (
    <div>
      <footer id="footer">
		<div className="container">
      <hr />
			<section>
				<article className="col-1">
					<h3>Contact</h3>
					<ul>
						<li className="address"><a href="#">17777 Bowdoin St<br/>Pacific Palisades, CA 90272</a></li>
						<li className="mail"><a href="#">belding@baysidehigh.com</a></li>
						<li className="phone last"><a href="#">(555) 555 0111</a></li>
					</ul>
				</article>
				<article className="col-2">
					<h3>Forum topics</h3>
					<ul>
						<li><a href="#">Omnis iste natus error sit</a></li>
						<li><a href="#">Nam libero tempore cum soluta</a></li>
						<li><a href="#">Totam rem aperiam eaque </a></li>
						<li><a href="#">Ipsa quae ab illo inventore veritatis </a></li>
						<li className="last"><a href="#">Architecto beatae vitae dicta sunt </a></li>
					</ul>
				</article>
				<article className="col-3">
					<h3>Social media</h3>
					<p>Temporibus autem quibusdam et aut debitis aut rerum necessitatibus saepe.</p>
					<ul>
						<li className="facebook"><a href="#">Facebook</a></li>
						<li className="google-plus"><a href="#">Google+</a></li>
						<li className="twitter"><a href="#">Twitter</a></li>
						<li className="pinterest"><a href="#">Pinterest</a></li>
					</ul>
				</article>
				<article className="col-4">
					<h3>Newsletter</h3>
					<p>Assumenda est omnis dolor repellendus temporibus autem quibusdam.</p>
					<form action="#">
						<input placeholder="Email address..." type="text" />
						<button type="submit">Subscribe</button>
					</form>
					<ul>
						<li><a href="#"></a></li>
					</ul>
				</article>
			</section>
			<p className="copy">Copyright 1996 Bayside High School. Designed by <a href="http://www.screechpowers.com/" title="Designed by Samuel 'Screech' Powers" target="_blank">Samuel 'Screech' Powers</a>. All rights reserved.</p>
		</div>
	</footer>
    </div>
  )
}

export default Footer

import React from 'react';

const Footer = () => {
  return (
    <div>
      <footer id="footer">
		<div className="container">
			<section>
				<article className="col-1">
					<h3>Contact</h3>
					<ul>
						<li className="address"><a href="#">151 W Adams St<br/>Detroit, MI 48226</a></li>
						<li className="mail"><a href="#">contact@harrisonuniversity.com</a></li>
						<li className="phone last"><a href="#">(971) 536 845 924</a></li>
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
			<p className="copy">Copyright 2014 Harrison High School. Designed by <a href="http://www.vandelaydesign.com/" title="Designed by Vandelay Design" target="_blank">Vandelay Design</a>. All rights reserved.</p>
		</div>
	</footer>
    </div>
  )
}

export default Footer

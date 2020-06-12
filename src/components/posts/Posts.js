import React from 'react';

const Posts = () => {
  return (
    <div>
      <section class="posts">
		<div class="container">
			<article>
				<div class="pic"><img width="121" src="images/2.png" alt="" /></div>
				<div class="info">
					<h3>Located to inspire</h3>
					<p>Nestled in sunny, beautiful Pacific Palisades, California students
              enjoy fresh ocean air and amazing scenery. Just minutes away from
              UCLA, students enjoy access to advance classes.</p>
				</div>
			</article>
			<article>
				<div class="pic"><img width="121" src="images/3.png" alt="" /></div>
				<div class="info">
					<h3>Programs for all of our students</h3>
					<p>With extracuricular programs before and after school covering a
              wide range of interests students will be able to find something of
              any time of day.</p>
				</div>
			</article>
		</div>
	</section>
    </div>
  )
}

export default Posts

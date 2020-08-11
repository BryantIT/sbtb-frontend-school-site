import React from 'react';
import { Link } from 'react-router-dom';

const NewsletterSingle = ({ newsletter }) => {

  return(
    newsletter ?

    <div className="container-news">
      <section className="news">
      <div className="container">
        <h2>{newsletter.attributes.title}</h2>
        <article>
          <div className="pic"><img src="https://triviahappy.com/wp-content/uploads/2014/05/buddybands.jpg" alt="" /></div>
          <p className="date">{newsletter.attributes.published}, {newsletter.attributes.author}</p>
          <div className="info">
              <div>
                <br />
              <p>{newsletter.attributes.body}</p>
              </div>
          </div>
          <br />
        </article>
      </div>
    </section>
    </div> : null
  )
}

export default NewsletterSingle

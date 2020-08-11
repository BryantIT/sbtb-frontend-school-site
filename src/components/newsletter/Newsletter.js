import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class Newsletter extends Component {

  render() {
    const { newsletters } = this.props
    return (
      <section className="news">
  		<div className="container">
  			<h2>Latest news</h2>
        {newsletters.slice(0, 4).reverse().map(n => (
  			<article>
  				<div className="pic"><img src="images/1.png" alt="" /></div>
  				<div className="info">
              <div>
                <h4>{n.attributes.title}</h4>
                <p className="date">{n.attributes.published}, {n.attributes.author}</p>
                <p>{n.attributes.body.substr(0,150)}...</p>
                <Link className="more" to={`/newsletters/${n.id}`}>Read more</Link>
              </div>
          </div>
          <br />
  			</article>
      ))}
  			<div className="btn-holder">
  				<a className="btn" href="#">Newsletter</a>
  			</div>
  		</div>
  	</section>
    )
  }
}

const mapStateToProps = state => {
  return {
    newsletters: state.newsletters
  }
}


export default connect(mapStateToProps)(Newsletter)

import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import Login from '../users/Login';
import Logout from '../users/Logout';
import Events from '../events/Events';

const Teachers = ({ currentUser }) => {
  return (
    currentUser && currentUser.attributes.role === "teacher" ?
    <div>
      <div className="divider"></div>

	<div className="content">
		<div className="container">

			<div className="main-content">
				<h1>Welcome {currentUser.attributes.first_name} {currentUser.attributes.last_name}</h1>
				<section className="posts-con">
					<article>
						<div className="current-date">
							<p>April</p>
							<p className="date">15</p>
						</div>
						<div className="info">
							<h3>Sed ut perspiciatis unde omnis iste natus error sit voluptatem</h3>
							<p className="info-line"><span className="time">10:30 AM</span><span className="place">Lincoln High School</span></p>
							<p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus.</p>
						</div>
					</article>
					<article>
						<div className="current-date">
							<p>April</p>
							<p className="date">17</p>
						</div>
						<div className="info">
							<h3>Sed ut perspiciatis unde omnis iste natus error sit voluptatem</h3>
							<p className="info-line"><span className="time">10:30 AM</span><span className="place">Lincoln High School</span></p>
							<p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.</p>
						</div>
					</article>
					<article>
						<div className="current-date">
							<p>April</p>
							<p className="date">25</p>
						</div>
						<div className="info">
							<h3>Sed ut perspiciatis unde omnis iste natus error sit voluptatem</h3>
							<p className="info-line"><span className="time">10:30 AM</span><span className="place">Lincoln High School</span></p>
							<p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.</p>
						</div>
					</article>
					<article className="last">
						<div className="current-date">
							<p>April</p>
							<p className="date">29</p>
						</div>
						<div className="info">
							<h3>Sed ut perspiciatis unde omnis iste natus error sit voluptatem</h3>
							<p className="info-line"><span className="time">10:30 AM</span><span className="place">Lincoln High School</span></p>
							<p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.</p>
						</div>
					</article>
				</section>
			</div>

			<aside id="sidebar">

            <div><Logout /></div><br />

				<div className="widget clearfix calendar">
					<h2>Event calendar</h2>
					<div className="head">
						<a className="prev" href="#"></a>
						<a className="next" href="#"></a>
						<h4>April 2014</h4>
					</div>
					<div className="table">
						<table>
              <tbody>
							<tr>
								<th className="col-1">Mon</th>
								<th className="col-2">Tue</th>
								<th className="col-3">Wed</th>
								<th className="col-4">Thu</th>
								<th className="col-5">Fri</th>
								<th className="col-6">Sat</th>
								<th className="col-7">Sun</th>
							</tr>
							<tr>
								<td className="col-1 disable"><div>31</div></td>
								<td className="col-2"><div>1</div></td>
								<td className="col-3"><div>2</div></td>
								<td className="col-4"><div>3</div></td>
								<td className="col-5 archival"><div>4</div></td>
								<td className="col-6"><div>5</div></td>
								<td className="col-7"><div>6</div></td>
							</tr>
							<tr>
								<td className="col-1"><div>7</div></td>
								<td className="col-2"><div>8</div></td>
								<td className="col-3 archival"><div>9</div></td>
								<td className="col-4"><div>10</div></td>
								<td className="col-5"><div>11</div></td>
								<td className="col-6"><div>12</div></td>
								<td className="col-7"><div>13</div></td>
							</tr>
							<tr>
								<td className="col-1"><div>14</div></td>
								<td className="col-2 upcoming"><div><div className="tooltip"><div className="holder">
									<h4>Omnis iste natus error sit voluptatem dolor</h4>
									<p className="info-line"><span className="time">10:30 AM</span><span className="place">Lincoln High School</span></p>
									<p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident similique.</p>
								</div></div>15</div></td>
								<td className="col-3"><div>16</div></td>
								<td className="col-4 upcoming"><div><div className="tooltip"><div className="holder">
									<h4>Omnis iste natus error sit voluptatem dolor</h4>
									<p className="info-line"><span className="time">10:30 AM</span><span className="place">Lincoln High School</span></p>
									<p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident similique.</p>
								</div></div>16</div></td>
								<td className="col-5"><div>18</div></td>
								<td className="col-6"><div>19</div></td>
								<td className="col-7"><div>20</div></td>
							</tr>
							<tr>
								<td className="col-1"><div>21</div></td>
								<td className="col-2"><div>22</div></td>
								<td className="col-3"><div>23</div></td>
								<td className="col-4"><div>24</div></td>
								<td className="col-5 upcoming"><div><div className="tooltip"><div className="holder">
									<h4>Omnis iste natus error sit voluptatem dolor</h4>
									<p className="info-line"><span className="time">10:30 AM</span><span className="place">Lincoln High School</span></p>
									<p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident similique.</p>
								</div></div>25</div></td>
								<td className="col-6"><div>26</div></td>
								<td className="col-7"><div>27</div></td>
							</tr>
							<tr>
								<td className="col-1"><div>28</div></td>
								<td className="col-2 upcoming"><div><div className="tooltip"><div className="holder">
									<h4>Omnis iste natus error sit voluptatem dolor</h4>
									<p className="info-line"><span className="time">10:30 AM</span><span className="place">Lincoln High School</span></p>
									<p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident similique.</p>
								</div></div>29</div></td>
								<td className="col-3"><div>30</div></td>
								<td className="col-4 disable"><div>1</div></td>
								<td className="col-5 disable"><div>2</div></td>
								<td className="col-6 disable"><div>3</div></td>
								<td className="col-7 disable"><div>4</div></td>
							</tr>
              </tbody>
						</table>
					</div>
					<div className="note">
						<p className="upcoming-note">Upcoming event</p>
						<p className="archival-note">Archival event</p>
					</div>
				</div>

			</aside>


		</div>

    <Events />
	</div>
    </div>:

    <div>
      <Login />
    </div>

  )
}

const mapStateToProps = ({ currentUser }) => {
  return {
    currentUser

  }
}

export default connect(mapStateToProps)(Teachers)

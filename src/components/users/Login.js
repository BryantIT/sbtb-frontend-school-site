import React from 'react';
import { connect } from 'react-redux';
import { updateLoginForm } from '../../actions/users/loginForm';
import { login } from '../../actions/users/currentUser';
import Signup from './Signup';


const Login = ({ loginForm, updateLoginForm, login, history }) => {

  const handleInputChange = event => {
    const { name, value } = event.target
    const updatedFormInfo = {
      ...loginForm,
      [name]: value
    }
    updateLoginForm(updatedFormInfo)
  }

  const handleSubmit = event => {
    event.preventDefault()
    login(loginForm)
  }

  return (
<div className="container">
  <div className="login-wrap">
  	<div className="login-html">
  		<input id="tab-1" type="radio" name="tab" className="sign-in" defaultChecked /><label htmlFor="tab-1" className="tab">Sign In</label>
  		<input id="tab-2" type="radio" name="tab" className="sign-up" /><label htmlFor="tab-2" className="tab">Sign Up</label>
  		  <div className="login-form">
  			<div className="sign-in-htm">
          <form onSubmit={handleSubmit}>
  				<div className="group">
  					<label htmlFor="email" className="label">Email</label>
              <input className="input" name="email" value={loginForm.email} placeholder="Email address..."
              type="email" onChange={handleInputChange} />
  				</div>
  				<div className="group">
  					<label htmlFor="pass" className="label">Password</label>
              <input className="input" name="password" value={loginForm.password} placeholder="Password..."
              type="password" onChange={handleInputChange} />
  				</div>
          <div className="hr"></div>
  				<div className="group">
  					<button className="button" type="submit" value="LOGIN">Login</button>
  				</div>

        </form>

  			</div>
  			<div className="sign-up-htm">
  				<Signup />
  				</div>
  			</div>
  		</div>
  </div>
</div>

  )
}

const mapStateToProps = state => {
  return {
    loginForm: state.loginForm
  }
}

export default connect(mapStateToProps, { updateLoginForm, login })(Login)

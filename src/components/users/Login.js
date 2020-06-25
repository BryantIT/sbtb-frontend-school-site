import React from 'react';
import { connect } from 'react-redux';
import { updateLoginForm } from '../../actions/users/loginForm';
import { login } from '../../actions/users/currentUser';


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
    <div>
  		<a href="#fancy" className="info-request">
  				<span className="title">Login</span>
  		</a>

      <div id="fancy">
  		<h2>Login</h2>
  		<form action="#" onSubmit={handleSubmit}>
  			<div className="left">
  				<fieldset className="mail">
            <input name="email" value={loginForm.email} placeholder="Email address..."
            type="email" onChange={handleInputChange} />
          </fieldset>
  				<fieldset className="name">
            <input name="password" value={loginForm.password} placeholder="Password..."
            type="password" onChange={handleInputChange} />
          </fieldset>
  			</div>

  			<div className="btn-holder">
  				<button className="btn red" type="submit" value="LOGIN">Submit</button>
  			</div>
  		</form>
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

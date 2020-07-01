import React from 'react';
import { connect } from 'react-dom';
import { updateSignupForm } from '../../actions/users/signupForm';
import { signup } from '../../actions/users/currentUser';

const Signup = ({ signupFormData, updateSignupForm, signup, history }) => {

  const handleUserProfileChange = event => {
    const { name, value } = event.target
    const updatedFormInfo = {
      ...signupFormData,
      [name]: value
    }
    updateSignupForm(updatedFormInfo)
  }

  const handleSubmit = event => {
    event.preventDefault()
    signup(signupFormData, history)
  }

  const confirmPass = event => {
    const pass = React.findDOMNode(this.refs.pass).value;
    const cPass = React.findDOMNode(this.refs.cPass).value;
    if (pass != cPass) {
      alert('Passwords do not match, please try again')
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="group">
          <label for="pass" className="label">First Name</label>
          <input id="pass" type="text" className="input" placeholder="First Name"/>
        </div>
        <div className="group">
          <label for="pass" className="label">Last Name</label>
          <input id="pass" type="text" className="input" placeholder="Last Name"/>
        </div>
        <div className="group">
          <label for="pass" className="label">Email Address</label>
          <input id="pass" type="text" className="input" placeholder="Email Address"/>
        </div>
        <div className="group">
          <label for="pass" className="label">Password</label>
          <input id="pass" type="password" className="input" data-type="password" placeholder="Password"/>
        </div>
        <div className="hr"></div>
        <div className="group">
          <input type="submit" className="button" value="Sign Up" />
        </div>
      </form>
    </div>
  )
}

export default Signup

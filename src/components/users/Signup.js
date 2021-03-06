import React from 'react';
import { connect } from 'react-redux';
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


  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="group">
          <label htmlFor="fName" className="label">First Name</label>
          <input id="fName" type="text" className="input" placeholder="First Name" value={signupFormData.first_name} name='first_name' onChange={handleUserProfileChange}/>
        </div>
        <div className="group">
          <label htmlFor="lName" className="label">Last Name</label>
          <input id="lName" type="text" className="input" placeholder="Last Name" value={signupFormData.last_name} name='last_name' onChange={handleUserProfileChange}/>
        </div>
        <div className="group">
          <label htmlFor="email" className="label">Email Address</label>
          <input id="email" type="text" className="input" placeholder="Email Address" value={signupFormData.email} name='email' onChange={handleUserProfileChange}/>
        </div>
        <div className="group">
          <label htmlFor="password" className="label">Password</label>
          <input id="password" type="password" className="input" data-type="password" placeholder="Password" value={signupFormData.password} name='password' onChange={handleUserProfileChange}/>
        </div>
        <div className="hr"></div>
        <div className="group">
          <button className="button" type="submit" value="SIGNUP">Signup</button>
        </div>
      </form>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    signupFormData: state.signupForm
  }
}

export default connect(mapStateToProps, { updateSignupForm, signup } )(Signup)

import React from 'react';

const Login = () => {
  return (
    <div>

  		<a href="#fancy" class="info-request">
  				<span class="title">Login</span>
  		</a>

      <div id="fancy">
  		<h2>Login</h2>
  		<form action="#">
  			<div className="left">
  				<fieldset className="mail"><input placeholder="Email address..." type="email" /></fieldset>
  				<fieldset className="name"><input placeholder="Password..." type="password" /></fieldset>
  			</div>

  			<div className="btn-holder">
  				<button className="btn red" type="submit">Submit</button>
  			</div>
  		</form>
  	</div>
    </div>
  )
}

export default Login

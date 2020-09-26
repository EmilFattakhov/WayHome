import React, { useState, useEffect } from 'react';
import './NewUserPage.css'
export default function NewUserPage() {


  function handleSubmit(event) {
    event.preventDefault();
    const { currentTarget } = event;
    const fd = new FormData(currentTarget);
    fetch('http://localhost:3000/api/v1/users', {
      method: 'POST',
      body: fd,
      credentials: 'include'
    }).then(res => res.json())
  }

  useEffect (() => {
	const signUpButton = document.getElementById('signUp');
	const signInButton = document.getElementById('signIn');
	const container = document.getElementById('userform-container');
		
	signUpButton.addEventListener('click', () => {
		container.classList.add("right-panel-active");
	});
		
	signInButton.addEventListener('click', () => {
		container.classList.remove("right-panel-active");
	})
  }, [])

  return(
	  <div className='userform-body'>
					<div className="userform-container" id="userform-container">
				<div className="form-container sign-up-container">
					<form className='userform-form' action="#">
						<h1 className='userform-h1'>Create Account</h1>
						<input className='userform-input' type="text" placeholder="Name" />
						<input className='userform-input' type="email" placeholder="Email" />
						<input className='userform-input' type="password" placeholder="Password" />
						<button className='userform-button' >Sign Up</button>
					</form>
				</div>
				<div className="form-container sign-in-container">
					<form className='userform-form' action="#">
						<h1 className='userform-h1'>Sign in</h1>
						<input className='userform-input' type="email" placeholder="Email" />
						<input className='userform-input' type="password" placeholder="Password" />
						<a className='username-a' href="#">Forgot your password?</a>
						<button className='userform-button'>Sign In</button>
					</form>
				</div>
				<div className="overlay-container">
					<div className="overlay">
						<div className="overlay-panel overlay-left">
							<h1 className='userform-h1'>Welcome Back!</h1>
							<p className='userform-p'>To keep connected with us please login with your personal info</p>
							<button className=" userform-button ghost" id="signIn">Sign In</button>
						</div>
						<div class="overlay-panel overlay-right">
							<h1 className='userform-h1'>Hello, Friend!</h1>
							<p className='userform-p'>Enter your personal details and start journey with us</p>
							<button className="userform-button ghost" id="signUp">Sign Up</button>
						</div>
					</div>
				</div>
			</div>
	  </div>
    
  )
}


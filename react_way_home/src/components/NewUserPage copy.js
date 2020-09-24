import React, { useState } from 'react';
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

  return(
    <div className='main'>
          <div className='form-container'>
              <div className='signup-content'>
                <div className='signup-img'>
                    {/* <img src='https://cdn.pixabay.com/photo/2020/04/17/09/32/pet-5054023_960_720.jpg'></img> */}
                </div>
                <div className='signup-form'>
                           <form className='register-form' id='register-form' onSubmit={handleSubmit}>
                                <div className='form-row'>
                                  <div className='form-group'>
                                      <div className='form-input'>
                                          <label htmlFor='first_name'>FIRST NAME</label>
                                          <input type='text' name='first_name' />
                                      </div>
                                      <div className='form-input'>
                                            <label htmlFor='last_name'>LAST NAME</label>
                                            <input type='text' name='last_name' />
                                      </div>
                                      <div className='form-input'>
                                            <label htmlFor='email'>EMAIL</label>
                                            <input type='email' name='email' />
                                      </div>
                                      <div className='form-input'>
                                            <label htmlFor='password'>PASSWORD</label>
                                            <input type='password' name='password' />
                                      </div>
                                      <div className='form-input'>
                                            <label htmlFor='password_confirmation'>PASSWORD CONFIRMATION</label>
                                            <input type='password' name='password_confirmation' />
                                      </div>
                                      <div className='form-input'>
                                            <label htmlFor='avatar'>AVATAR</label>
                                            <input type='text' name='avatar' />
                                      </div>
                                      <div className='form-input'>
                                            <input type='SUBMIT' value='create user' />
                                      </div>
                                  </div>
                                    
                                </div>   
                          </form>
                </div>
              </div>  
          </div>
    </div>
  )
}


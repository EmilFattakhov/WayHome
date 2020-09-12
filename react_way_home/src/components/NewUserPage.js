import React, { useState } from 'react';

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
    <main>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor='first_name'>First Name</label>
          <input type='text' name='first_name' />
        </div>
        <div>
          <label htmlFor='last_name'>Last Name</label>
          <input type='text' name='last_name' />
        </div>
        <div>
          <label htmlFor='email'>Email</label>
          <input type='email' name='email' />
        </div>
        <div>
          <label htmlFor='password'>Password</label>
          <input type='password' name='password' />
        </div>
        <div>
          <label htmlFor='password_confirmation'>Password Confirmation</label>
          <input type='password' name='password_confirmation' />
        </div>
        <div>
          <label htmlFor='avatar'>Avatar</label>
          <input type='text' name='avatar' />
        </div>
        <div>
          <input type='submit' value='create user' />
        </div>
      </form>
    </main>
  )
}


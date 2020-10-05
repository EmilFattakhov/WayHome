import React from 'react';
import { useHistory } from 'react-router-dom';

function SignInPage( { signIn }) {
  const history = useHistory();
  function handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const params = {
      email: formData.get('email'),
      password: formData.get('password')
    }
    signIn(params, history)
  }
  
  return(

    // <div className='petform-container'>
    //    <h3>The more details you provide the greater the chance that your pet will find way back home</h3>
    //    <form className='petform-form-container' onSubmit={(event) => { 
    //       event.preventDefault();
    //       handleSubmit();
    //     }}>
    //      <div className='petform-form'>
    //         <input type='text' name='name' id='name' value={name} onInput={handleUpdate} autoComplete='off' required ></input>
    //         <label for='name' className='label-name'> <span className='content-name'> Name </span> </label>
    //      </div>

    <div className='petform-container'>
      <form className='petform-form-container' onSubmit={handleSubmit} >
        <div className='petform-form'>
          <input type='text' id='email' name='email' autoComplete='off' required/>
          <label htmlFor='email'>Email</label>
        </div>
        <div className='petform-form'>
          <input type='password' id='password' name='password' autoComplete='off' required/>
          <label htmlFor='password'>Password</label>
        </div>
        <div className='petform-form-submit'>
          <input className='submit' type='submit' value='Sign In'/>
        </div>
      </form>
    </div>
  )
}

export default SignInPage;
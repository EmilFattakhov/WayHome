import React, { useState } from 'react';
import './NewUserPage.css'
import { useHistory } from 'react-router-dom';
export default function NewUserPage() {
  const history = useHistory();
  
  function handleSubmit(event) {
    
    event.preventDefault();
    const { currentTarget } = event;
    const fd = new FormData(currentTarget);
    fetch('http://localhost:3000/api/v1/users', {
      method: 'POST',
      body: fd,
      credentials: 'include'
    }).then(res => res.json()
    ).then(() => {
       history.push({
              pathname:'/pets'
       })
    })
  }

  return(
        <>
            <div className='petform-container'>
                  <form className='petform-form-container' onSubmit={handleSubmit}>
                         <div className='petform-form'>
                               <input type='text' name='first_name' autoComplete='off' required ></input>
                               <label for='first_name' className='label-name'> <span className='content-name'> First Name </span> </label>
                        </div>
                        <div className='petform-form'>
                               <input type='text' name='last_name' autoComplete='off' required ></input>
                               <label for='last_name' className='label-name'> <span className='content-name'> Last Name </span> </label>
                        </div>
                        <div className='petform-form'>
                               <input type='email' name='email' autoComplete='off' required ></input>
                               <label for='email' className='label-name'> <span className='content-name'> Email </span> </label>
                        </div>
                        <div className='petform-form'>
                               <input type='password' name='password' autoComplete='off' required ></input>
                               <label for='password' className='label-name'> <span className='content-name'> Password </span> </label>
                        </div>
                        <div className='petform-form'>
                               <input type='password' name='password_confirmation'  autoComplete='off' required ></input>
                               <label for='password_confirmation' className='label-name'> <span className='content-name'> Confirm Password </span> </label>
                        </div>
                        <div className='petform-form'>
                               <input type='text' name='avatar' autoComplete='off' required ></input>
                               <label for='avatar' className='label-name'> <span className='content-name'> Avatar </span> </label>
                        </div>
                        <div className='petform-form-submit'>
                               <input className='submit' type='submit' value='create user'></input>
                        </div>
                  </form>
            </div>
        </>
//     <div className='main'>
//           <div className='form-container'>
//               <div className='signup-content'>
//                 <div className='signup-img'>
//                     {/* <img src='https://cdn.pixabay.com/photo/2020/04/17/09/32/pet-5054023_960_720.jpg'></img> */}
//                 </div>
//                 <div className='signup-form'>
//                            <form className='register-form' id='register-form' onSubmit={handleSubmit}>
//                                 <div className='form-row'>
//                                   <div className='form-group'>
//                                       <div className='form-input'>
//                                           <label htmlFor='first_name'>FIRST NAME</label>
//                                           <input type='text' name='first_name' />
//                                       </div>
//                                       <div className='form-input'>
//                                             <label htmlFor='last_name'>LAST NAME</label>
//                                             <input type='text' name='last_name' />
//                                       </div>
//                                       <div className='form-input'>
//                                             <label htmlFor='email'>EMAIL</label>
//                                             <input type='email' name='email' />
//                                       </div>
//                                       <div className='form-input'>
//                                             <label htmlFor='password'>PASSWORD</label>
//                                             <input type='password' name='password' />
//                                       </div>
//                                       <div className='form-input'>
//                                             <label htmlFor='password_confirmation'>PASSWORD CONFIRMATION</label>
//                                             <input type='password' name='password_confirmation' />
//                                       </div>
//                                       <div className='form-input'>
//                                             <label htmlFor='avatar'>AVATAR</label>
//                                             <input type='text' name='avatar' />
//                                       </div>
//                                       <div className='form-input'>
//                                             <input type='SUBMIT' value='create user' />
//                                       </div>
//                                   </div>
                                    
//                                 </div>   
//                           </form>
//                 </div>
//               </div>  
//           </div>
//     </div>
  )
}


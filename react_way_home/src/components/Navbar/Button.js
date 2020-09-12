import React from 'react';
import './Button.css';
import { Link } from 'react-router-dom';

export function Button( {user} ) {
  return (
    user ? (<div> 
            <button className='btn'>{user.first_name} {user.last_name}</button>
            </div>) 
    :( 
      <Link to='/users/new'>
        <button className='btn'>Sign Up</button>
      </Link>)
    );
}

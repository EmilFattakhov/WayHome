import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Nav, Button, Text } from 'grommet';
import { User } from '../requests';

function Navbar({ user }) {

    const [showDropDown, setShowDropDown] = useState('')
    const [avatar, setAvatar] = useState('')

    function handleClick() {
            setShowDropDown(true)
            fetch('http://localhost:3000/api/v1/users/{user.id}').then(res => res.json())
            .then(payload => {
            setAvatar(payload.avatar_url)
            });
    }

  return(
    <Nav background='brand' direction="row" pad="medium">
        {
        user ? (
                    <div> 
                        <button onClick={handleClick}> <Text alignSelf='center'>{user.first_name} {user.last_name}</Text> </button>
                        {
                            avatar ? <p>yes</p> : <p>No</p>
                        }
                        {
                            showDropDown? (
                                <div>  <Link to='/pets'> <Button label="Pet index Page" /> </Link> </div>
                            ) : 
                            null
                        }
                    </div>
                ) : (
                    <Link to='/sign_in'>Sign In</Link>
                )
                }
      <Link to='/pets'><Button label="Pet index Page" /></Link>
      <Link to='/pets/new'><Button label="Create A Pet" /></Link>
    </Nav>
  )
}

export default Navbar

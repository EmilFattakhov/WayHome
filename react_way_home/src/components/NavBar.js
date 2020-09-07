import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Nav, Button, Text } from 'grommet';


function Navbar({ user }) {

    const [showDropDown, setShowDropDown] = useState('')

    function handleClick() {
            setShowDropDown(true)
    }

  return(
    <Nav background='brand' direction="row" pad="medium">
        {
        user ? (
                    <div> 
                        <button onClick={handleClick}> <Text alignSelf='center'>{user.first_name} {user.last_name}</Text> </button>
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

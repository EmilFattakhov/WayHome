import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { Nav, Button, Text } from 'grommet';

class LoginDropDownMenu extends Component {
    constructor() {
        super();

    this.state = {
        showDropDown: false
    }

    this.showDropDown = this.showDropDown.bind(this);
    }

    showDropDown(event) {
        event.preventDefault();

        this.setState({
            showDropDown: true,
        })
    }

render() {
    return (
        <div>
            <button onClick={this.showDropDown}> 
                user ? <Text alignSelf='center'>{user.first_name} {user.last_name}</Text> : <Link to='/sign_in'>Sign In</Link>
            </button>
            {
                this.state.ShowDropDown ? (
                    <div> 
                        <Link to='/pets'><Button label="Pet index Page" /></Link>
                        <Link to='/pets/new'><Button label="Create A Pet" /></Link>
                    </div>
                ) : (
                    null
                )
            }
        </div>
    )
}
} 

export default LoginDropDownMenu;
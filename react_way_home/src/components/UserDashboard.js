import React, { Component} from 'react'
import { Session, User } from '../requests';
import axios from 'axios'

class UserDashboard extends Component {
    constructor(props) {
      super(props);
      this.state = {
        user: null,
      }
      this.getCurrentUser=this.getCurrentUser.bind(this)
      this.getCurrentUserPets=this.getCurrentUserPets.bind(this)
    }

    componentDidMount() {
        this.getCurrentUser();
        this.getCurrentUserPets()
      }

    getCurrentUser() {
        Session.getCurrentUser()
          .then(user => {
            this.setState((state) => {
              return {
                user: user
              }
            })
            console.log('user', this.state.user)
        });
    }
    getCurrentUserPets() {
        // User.show()
        //     .then(pets => {
        //         this.setState( (state) => {
        //             return {
        //                 pets: pets
        //             }
        //         })
        //     })
        axios.get('http://localhost:3000/api/v1/users').then(response => {
            console.log(response)
        })
    }

    render() {
        return(
        <>
        { this.state.user ? 
        (<div> Hello from Dashboard </div>) : " " }
        </>
        );
    }
}

export default UserDashboard
      
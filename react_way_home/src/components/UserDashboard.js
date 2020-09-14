import React, { Component} from 'react'
import { Session, User } from '../requests';
import axios from 'axios';
import { Link } from 'react-router-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel'

let show = false;
class UserDashboard extends Component {
    constructor(props) {
      super(props);
      this.state = {
        user: null,
        pets: [],
      }
      this.getCurrentUser=this.getCurrentUser.bind(this)
      this.getCurrentUserPets=this.getCurrentUserPets.bind(this)
    }

    componentDidMount() {
        this.getCurrentUser();
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
    // getCurrentUserPets() {
    //   User.show().then(pets => {
    //     console.log(pets)
    //   })
    // }
    getCurrentUserPets() {
      show = true;
        axios.get(`http://localhost:3000/api/v1/users/${this.state.user.id}`).then(response => {
          this.setState((state) => {
            return {
              pets: response.data.pets
            }
        })
        console.log(this.state.user)
        console.log(this.state.pets)
    })};

    render() {
        return(
        <>
        { this.state.user ? 
        (<div> Hello from Dashboard </div>) : " " }
        <button onClick={this.getCurrentUserPets}>Get Pets</button>
        { show = true? (<div className='griddiv'>
          {this.state.pets.map((pet) => {
            console.log(pet)
            return(
              <>
                <div className='grid-element' key={pet.id}>
                { pet.flag == 'found' ? <div className='found'></div> : ""}
                { pet.flag == 'lost' ? <div className='lost'></div> : ""}
                { pet.flag == 'returned' ? <div className='returned'></div> : ""}
                    <Carousel className="carousel1" showThumbs={false} showStatus={false} boardArrows>
                      <div className='image-cropper'>
                        <img className='profile-pic' src={pet.image1}></img>
                      </div>
                      <div className='image-cropper'>
                        <img className='profile-pic' src={pet.image2}></img>
                      </div>
                      <div className='image-cropper'>
                        <img className='profile-pic' src={pet.image3}></img>
                      </div>
                    </Carousel>
                    <div className='petname'><Link to={`/pets/${pet.id}`}> <h1 className='name'> {pet.name} </h1> </Link></div>
                    <button data-id={pet.id} onClick={this.deletePet}>Delete</button>
                 </div>
                 </>)
          })}
          </div>) : " "}
        </>
        );
    }
}

export default UserDashboard
      
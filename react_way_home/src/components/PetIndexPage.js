import React, { Component } from 'react'
import { Pet } from '../requests';
import { Link } from 'react-router-dom';

class PetIndexPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pets: [],
    }
  }

  componentDidMount() {
    Pet.index()
      .then(pets => {
        this.setState((state) => {
          return {
            pets: pets
          }
        })
      });
  }

  render() {
    return(
      <main id='question-index-page'>
        <h1>Pets Index Page</h1>
        <ul>
          {this.state.pets.map((pet) => {
            return <li key={pet.id}>
                 <Link to={`/pets/${pet.id}`}> {pet.name} </Link>
                 <p> Description: {pet.description} </p>
                 <p> Animal: {pet.animal} </p>
                 <p> Age: {pet.age} </p>
                 <p> Sex: {pet.sex} </p>
                 <p> Breed: {pet.breed} </p>
                 <p> Colour: {pet.colour} </p>
                 <p> Location Lost: {pet.location_lost} </p>
                 <p> Time Lost: {pet.time_lost} </p>
                 <p> Flag: {pet.flag} </p>
                 {/* <p> Pictures: {pet.pictures} </p> */}
            </li>
          })}
        </ul>
      </main>
    )
  }
}

export default PetIndexPage;
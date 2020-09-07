import React, { Component } from 'react'
import NewPetForm from './NewPetForm';
import { Pet } from '../requests';
import Home from './mapsFeatures/Home'
import { Main } from 'grommet';
class PetCreatePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newPetParams: {
        name: '',
        description: '',
        animal: '',
        age: '',
        sex: '',
        breed: '',
        colour: '',
        location_lost: '',
        distinctive_features: '',
        flag: '',
        time_lost: '',
        pictures: []
      },
      errors: {}
    }

    this.createPet = this.createPet.bind(this)
    this.updatePetParams = this.updatePetParams.bind(this);
  }

  updatePetParams(params) {
    this.setState( (state) => {
      const newPetCopy = {...state.newPetParams};
      return {
        newPetParams: {
          ...newPetCopy,
          ...params
        }
      }
    })
  }

  createPet() {
    Pet.create(this.state.newPetParams)
      .then(res => {
        if(res.id) {
          this.props.history.push(`/pets/${res.id}`)
        }
        if (res.errors) {
          this.setState(() => {
            return {
              errors: res.errors
            }
          })
        }
      });
  }

  render() {
    return(
      <main id='question-create-page'>
        {
          Object.keys(this.state.errors).map(key => {
            return(
            <div>{key} {this.state.errors[key].join(', ')}</div>
            )
          })
        }
        {/* we pass this.createQuestion to a child component because we want event's on a child component to trigger an update to state */}
        <NewPetForm
          handleSubmit={this.createPet}
          name={this.state.newPetParams.name}
          description={this.state.newPetParams.description}
          animal={this.state.newPetParams.animal}
          age={this.state.newPetParams.age}
          sex={this.state.newPetParams.sex}
          breed={this.state.newPetParams.breed}
          colour={this.state.newPetParams.colour}
          location_lost={this.state.newPetParams.location_lost}
          distinctive_features={this.state.newPetParams.distinctive_features}
          flag={this.state.newPetParams.flag}
          time_lost={this.state.newPetParams.time_lost}
          pictures={this.state.newPetParams.pictures}
          updatePetParams={this.updatePetParams}
        />
        {
          (this.state.newPetParams.pictures[0]) ? (
            <div>
            <img width="100" height="100" src={this.state.newPetParams.pictures[0]} />
            </div>
          ) : null
          }
          <Home props={this.state.location_lost} />
        {/* Remember! when you pass down a method as a function through props the `this` value within the, now, function will be the global scope! So we need to make sure we bind the method to force the `this` value to be QuestionCreatePage */}
      </main>
    )
  }
}

export default PetCreatePage
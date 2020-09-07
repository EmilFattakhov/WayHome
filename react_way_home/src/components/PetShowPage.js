import React, { Component } from 'react';
import PetDetails from './PetDetails';
import CommentsList from './CommentsList';
import LocationsList from './LocationsList';
import { Pet } from '../requests';
// import NewComment from './NewComment';
import CommentForm from './CommentForm';
import LocationForm from './LocationForm';

class PetShowPage extends Component {
  constructor(props) {
    super(props); // in all React Class components you must always call the `super(props)` within the constructor
    this.state = {
      pet: {}
    }
    this.deleteComment = this.deleteComment.bind(this) // if you pass down a function that needs access to `this` then you should .bind(this) within the constructor
    this.createComment = this.createComment.bind(this)
    this.createLocation = this.createLocation.bind(this)
    this.updatePet = this.updatePet.bind(this)
  }

  componentDidMount() {
    Pet.show(this.props.match.params.id)
      .then(pet => {
        console.log('pet', pet)
        console.log('pet location',pet.locations);
        console.log('pet pictures', pet.pictures)
        this.setState(() => {
          return {
            pet: pet
          }
        })
      })
  }

  deleteComment(id) { 
    this.setState((currentState) => {
      const petCopy = JSON.parse(JSON.stringify(currentState.pet));
      const newComments = petCopy.comments.filter((currentComment) => {
        return currentComment.id !== id;
      })
      petCopy.comments = newComments
      return {
        pet: petCopy
      }
    })
  }

  createComment(commentParams) {
    const { pet } = this.state;

    this.setState({
      pet: {
        ...pet,
        comments: [commentParams, ...pet.comments]
      }
    });
  }


  createLocation (locationParams) {
    const { pet } = this.state;

    this.setState({
      pet: {
        ...pet,
        locations: [locationParams, ...pet.locations]
      }
    });
    console.log('pet',pet);
    console.log('state', this.state)
  }

  updatePet() {
    Pet.update(this.state.pet)
    .then(res => {
      console.log('res from update pet', res)
      if (res.id) {
        this.props.history.push('./pets/${res.id}')
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
      <main>
        <PetDetails pet={this.state.pet}> </PetDetails>
        <h2>Comments</h2>
        <CommentForm onSubmit={this.createComment} updatePet={this.updatePet}></CommentForm>
        <LocationForm onSubmit={this.createLocation} updatePet={this.updatePet}></LocationForm>
        {/* <NewComment title='title' body='body'></NewComment> */}
        <CommentsList comments={this.state.pet.comments} handleDeleteComment={this.state.deleteComment}/>
        <LocationsList locations={this.state.pet.locations} />
      </main>
    )
  }
}

export default PetShowPage
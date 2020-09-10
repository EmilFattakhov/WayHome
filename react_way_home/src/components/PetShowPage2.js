import React, { Component } from 'react';
import PetDetails from './PetDetails';
import CommentsList from './CommentsList';
import LocationsList from './LocationsList';
import { Pet, Comment } from '../requests';
import NewCommentForm from './NewCommentForm';
import CommentForm from './CommentForm';
import LocationForm from './LocationForm';

class PetShowPage extends Component {
  constructor(props) {
    super(props); // in all React Class components you must always call the `super(props)` within the constructor
    this.state = {
      pet: {
        comments: [],
        locations: [],
      }
    }

    this.createComment = this.createComment.bind(this)
    this.createLocation = this.createLocation.bind(this)
  }

  componentDidMount() {
    Pet.show(this.props.match.params.id)
      .then(pet => {
        console.log('pet', pet)
        console.log('pet comments', pet.comments);
        console.log('pet location',pet.locations);
        console.log('pet pictures', pet.pictures);
        this.setState(() => {
          return {
            pet: pet
          }
        })
      })
  }

  updatePetParams(params) {
    this.setState( (state) => {
      const newPetCopy = {...state.pet};
      return {
        pet: {
          ...newPetCopy,
          ...params
        }
      }
    })
  }

  createComment() {
    Comment.create(this.state.pet.comments)
  }

  // createComment(commentParams) {
  //   const { pet } = this.state;

  //   this.setState({
  //     pet: {
  //       ...pet,
  //       comments: [commentParams, ...pet.comments]
  //     }
  //   });
  // }
  createComment = (id, params) => {
    Comment.create(id, params).then(comment => {
      if (comment.errors) {
        this.setState({ errors: comment.errors });
      }
    });
  };


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
        {/* <NewCommentForm pet={this.state.pet} onSubmit={this.createComment}></NewCommentForm> */}
        <CommentForm onSubmit={this.createComment} updatePet={this.updatePet}></CommentForm>
        {/* <LocationForm onSubmit={this.createLocation} updatePet={this.updatePet}></LocationForm> */}
        {/* <NewComment title='title' body='body'></NewComment> */}
        <CommentsList comments={this.state.pet.comments} handleDeleteComment={this.state.deleteComment}/>
        {/* <LocationsList locations={this.state.pet.locations} /> */}
      </main>
    )
  }
}

export default PetShowPage
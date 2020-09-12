import React, { Component } from 'react';
import PetDetails from './PetDetails';
import CommentsList from './CommentsList';
import LocationsList from './LocationsList';
import { Pet, Comment, Location } from '../requests';
import NewCommentForm from './NewCommentForm';
import CommentForm from './CommentForm';
import NewLocationForm from './NewLocationForm';

class PetShowPage extends Component {
  constructor(props) {
    super(props); // in all React Class components you must always call the `super(props)` within the constructor
    this.state = {
      pet: {},
      locat: {},
    }
    this.createLocation = this.createLocation.bind(this)
    
  }

  componentDidMount() {
    Pet.show(this.props.match.params.id)
      .then(pet => {
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

  createComment = (id, params) => {
    Comment.create(id, params).then(comment => {
      if (comment.errors) {
        this.setState({ errors: comment.errors });
      }
    });
  };


  createLocation = (id, params) => {
    Location.create(id, params).then(location=> {
      if (location.errors) {
        this.setState( {errors: location.errors } )
      }
    });
  };

  // handleChange = (newValue) => {
  //   this.setState( (state) => {
  //     const newPetCopy = {...state.locat};
  //     return {
  //       locat: {
  //         ...newPetCopy,
  //         ...newValue
  //       }
  //     }
  //   });
  // }
  

  render() {
    const currentUser = this.props.currentUser;
    return(
      <main>
        <PetDetails pet={this.state.pet}> </PetDetails>
        <h2>Comments</h2>
        <NewCommentForm pet={this.state.pet} onSubmit={this.createComment}></NewCommentForm>
        <NewLocationForm pet={this.state.pet} onSubmit={this.createLocation}></NewLocationForm>
        {/* <CommentForm onSubmit={this.createComment} updatePet={this.updatePet}></CommentForm> */}
        {/* <LocationForm onSubmit={this.createLocation} updatePet={this.updatePet}></LocationForm> */}
        {/* <NewComment title='title' body='body'></NewComment> */}
        <CommentsList comments={this.state.pet.comments} handleDeleteComment={this.state.deleteComment}/>
        <LocationsList locations={this.state.pet.locations} />
      </main>
    )
  }
}

export default PetShowPage
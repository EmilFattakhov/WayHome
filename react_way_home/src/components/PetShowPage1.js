import React, { useState, useEffect } from 'react'
import PetDetails from './PetDetails';
import CommentsList from './CommentsList';
import { Pet } from '../requests';

export default function PetShowPage(props) {
  const [pet, setPet] = useState({});

  useEffect(() => {
    Pet.show(props.match.params.id)
      .then(pet => {
        setPet(() => {
          return pet
        })
      })
  }, [])

  function deleteComment(id) {
    setPet((state) => {
      const petCopy = JSON.parse(JSON.stringify(state));
      const newComments = petCopy.comments.filter((currentComment) => {
        return currentComment.id !== id;
      })
      petCopy.comments = newComments;
      return petCopy
    })
  }

  return(
    <main id='question-show-page'>
      <PetDetails pet={pet}> </PetDetails>
      <h2>Comments</h2>
      <CommentsList comments={pet.comments} handleDeleteComment={deleteComment}/>
    </main>
  );
}

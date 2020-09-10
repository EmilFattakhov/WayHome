import React from 'react'
import CommentDetails from './CommentDetails';

function CommentsList(props) {
  return(
    <>
      { props.comments ? props.comments.map( (comment, i) => {
        return <CommentDetails id={comment.id} key={i} body={comment.body} author={comment.author} createdAt={comment.createdAt} handleDeleteComment={props.handleDeleteComment}/>
      }) : null }
    </>
  )
}

export default CommentsList;

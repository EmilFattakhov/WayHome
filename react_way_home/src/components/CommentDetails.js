import React from 'react'
import './CommentDetails.css'
function CommentsDetails(props) {
  const createdAt = new Date(props.created_at)
  return (
    <div className='comment-details'>
      <p>
        {props.body}<br/>
      <small>by { props.author ? props.author : ''}</small>
      </p>
    </div>
  )
}
export default CommentsDetails
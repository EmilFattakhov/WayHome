import React from 'react'

function CommentsDetails(props) {
  const createdAt = new Date(props.created_at)
  return (
    <div>
      <p>
        {props.body}<br/>
      <small>by { props.author ? props.author.full_name : ''}</small>
      </p>
    </div>
  )
}
export default CommentsDetails
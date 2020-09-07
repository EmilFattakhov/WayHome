import React from 'react'

function CommentsDetails(props) {
  const createdAt = new Date(props.created_at)
  return (
    <div style={styles.container} className='ui segment'>
      <p>
        {props.body}<br/>
      <small>by { props.author ? props.author.full_name : ''}</small>
      </p>
      <p>
      <small>Commented at {createdAt.toString()}</small>
      </p>
      <button onClick={(event) => {props.handleDeleteComment(props.id)}}>Delete</button>
    </div>
  )
}

const styles = {
  container: {
    color: 'red'
  },
  heading: {
    color: 'blue'
  }
}
export default CommentsDetails
import React from 'react'

function LocationDetails(props) {
  const createdAt = new Date(props.created_at)
  return (
    <div style={styles.container} className='ui segment'>
      <p> Latitude {props.lat} </p>
      <p>
          Longitude {props.long}
      <small>Added to the website on at {createdAt.toString()}</small>
      </p>
      {/* <button onClick={(event) => {props.handleDeleteComment(props.id)}}>Delete</button> */}
    </div>
  )
}

const styles = {
  container: {
    color: 'green'
  },
  heading: {
    color: 'grey'
  }
}
export default LocationDetails
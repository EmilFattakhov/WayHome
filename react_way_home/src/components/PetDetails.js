import React from 'react';

export default function PetDetails(props) {
  const createdAt = new Date(props.pet.created_at);
  console.log("this is props", props)
  console.log(props.pet)
  return (
    <div className='container'>
      <h2>Name {props.pet.name}</h2>
      <h2>Age {props.pet.age}</h2>
      <h2>Sex {props.pet.sex}</h2>
      <h2>Breed {props.pet.breed}</h2>
      <h2>Location {props.pet.location_lost}</h2>
      <p>
        {props.pet.description}<br />
        {/* <small>{ props.pet.id ? props.pet.author.full_name : ''}</small> */}
      </p>
      <p>
      <small> Created at {createdAt.toString()}</small>
      </p>
    </div>
  )
}

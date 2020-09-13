import React from 'react';

export default function PetDetails(props) {
  
  const createdAt = new Date(props.pet.created_at);
  console.log("this is props", props)
  console.log(props.pet.colour)

  return (
    <div className='container'>
      <h2>{props.pet.animal}</h2>
      <h1>Name {props.pet.name}</h1>
      <h1>Age {props.pet.age}</h1>
      <h1>Sex {props.pet.sex}</h1>
      <h1>Breed {props.pet.breed}</h1>
      <h1>Colour {props.pet.colour}</h1>
      <h1>Location {props.pet.location_lost}</h1>
      <h1>Time lost {props.pet.time_lost}</h1>
      <h2>
        {props.pet.description}<br />
        {/* <small>{ props.pet.id ? props.pet.author.full_name : ''}</small> */}
      </h2>
      <h3> Created at {createdAt.toString()}</h3>
    </div>
  )
}

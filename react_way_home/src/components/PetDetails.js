import React from 'react';

export default function PetDetails(props) {
  
  const createdAt = new Date(props.pet.created_at);
  console.log("this is props", props)
  console.log(props.pet.colour)

  return (
    <div className='pet-details'>
      <h2>{props.pet.animal}</h2>
      <h1>Name {props.pet.name}</h1>
      <h2>
        {props.pet.description}<br />
        {/* <small>{ props.pet.id ? props.pet.author.full_name : ''}</small> */}
      </h2>
      <h1>About</h1>
      <p>Age {props.pet.age}</p>
      <p>Sex {props.pet.sex}</p>
      <p>Breed {props.pet.breed}</p>
      <p>Colour {props.pet.colour}</p>
      <p>Location {props.pet.location_lost}</p>
      <p>Time lost {props.pet.time_lost}</p>
      
      <h3> Created at {createdAt.toString()}</h3>
    </div>
  )
}

import React from 'react';

export default function PetDetails( {pet} ) {
  
  const createdAt = new Date(pet.created_at);
  const author = pet.author

  return (
    <div className='pet-details'>
      {/* <h2>{props.pet.animal}</h2> */}
      <h1><span className='petname'>{pet.name}</span></h1>
      <h2>
        {pet.description}<br />
        {/* <small>{ props.pet.id ? props.pet.author.full_name : ''}</small> */}
      </h2>
      <div className='horizontal-line'></div>
      <h1>About</h1>
      <div className='petdetails-two-columns'>
        <div className='petdetails-left-column'>
          <div className='petdetails-box'>
            <p>Age: <span>{pet.age}</span> </p>
            <p>Sex: <span>{pet.sex}</span></p>
            <p>Breed: <span>{pet.breed}</span> </p>
            <p>Distinctive features: <span>{pet.distinctive_features}</span> </p>
          </div>
        </div>
        <div className='petdetails-right-column'>
        <div className='petdetails-box'>
            <p>Colour: <span>{pet.colour}</span>   </p>
            <p>Location: <span>{pet.location_lost}</span></p>
            <p>Time / Date lost: <span>{pet.time_lost}</span> </p>
            {/* <p>Owner: <span>{author.full_name}</span> </p> */}
        </div>
        </div>
      </div>
    </div>
  )
}

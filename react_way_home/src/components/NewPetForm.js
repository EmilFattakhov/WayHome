import React from 'react';
import './NewPetForm.css'

export default function NewPetForm( { handleSubmit, name, description, animal, age, sex, breed, colour, location_lost, distinctive_features, time_lost, flag, image1, image2, image3, updatePetParams} ) {

  function handleUpdate(e) {
    const input = e.target;
    updatePetParams(
      {[input.name]: input.value}
    )
  }

  return(
    <>
     <div className='petform-container'>
       <h3>That's very sad, but we are here to help you!</h3>
       <h4>The more details you provide the greater the chance that your pet will find way back home</h4>
       <form className='petform-form-container'onSubmit={(event) => { 
          event.preventDefault();
          handleSubmit();
        }}>
         <div className='petform-form'>
            <input type='text' name='name' id='name' value={name} onInput={handleUpdate} autoComplete='off' required ></input>
            <label for='name' className='label-name'> <span className='content-name'> Name </span> </label>
         </div>
         <div className='petform-form'>
            <input type='text' name='description' id='description' value={description} onInput={handleUpdate} autoComplete='off' required></input>
            <label for='description' className='label-name'> <span className='content-name'> Description </span> </label>
         </div>
         <div className='petform-form'>
            <input type='text' name='animal' id='animal' value={animal} onInput={handleUpdate} autoComplete='off' required></input>
            <label for='animal' className='label-name'> <span className='content-name'> Animal </span> </label>
         </div>
         <div className='petform-form'>
            <input type='text' name='age' id='age' value={age} onInput={handleUpdate} autoComplete='off' required></input>
            <label for='age' className='label-name'> <span className='content-name'> Age </span> </label>
         </div>
         <div className='petform-form'>
            <input type='text' name='sex' id='sex' value={sex} onInput={handleUpdate} autoComplete='off' required></input>
            <label for='sex' className='label-name'> <span className='content-name'> Sex </span> </label>
         </div>
         <div className='petform-form'>
            <input type='text' name='breed' id='breed' value={breed} onInput={handleUpdate} autoComplete='off' required></input>
            <label for='breed' className='label-name'> <span className='content-name'> Breed </span> </label>
         </div>
         <div className='petform-form'>
            <input type='text' name='colour' id='colour' value={colour} onInput={handleUpdate} autoComplete='off' required></input>
            <label for='colour' className='label-name'> <span className='content-name'> Colour </span> </label>
         </div>
         <div className='petform-form'>
            <input type='text' name='location_lost' id='location_lost' value={location_lost} onInput={handleUpdate} autoComplete='off' required></input>
            <label for='location_lost' className='label-name'> <span className='content-name'> Location Lost </span> </label>
         </div>
         <div className='petform-form'>
            <input type='text' name='distinctive_features' id='distinctive_features' value={distinctive_features} onInput={handleUpdate} autoComplete='off' required></input>
            <label for='distinctive_features' className='label-name'> <span className='content-name'> Location Lost </span> </label>
         </div>
         <div className='petform-form'>
            <input type='text' name='distinctive_features' id='distinctive_features' value={distinctive_features} onInput={handleUpdate} autoComplete='off' required></input>
            <label for='distinctive_features' className='label-name'> <span className='content-name'> Location Lost </span> </label>
         </div>
       </form>
     </div>
    </>
  )
}

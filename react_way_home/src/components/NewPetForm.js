import React from 'react';

export default function NewPetForm( { handleSubmit, name, description, animal, age, sex, breed, colour, location_lost, distinctive_features, time_lost, flag, pictures, updatePetParams} ) {

  function handleUpdate(e) {
    const input = e.target;
    updatePetParams(
      {[input.name]: input.value}
    )
  }

  return(
    <form onSubmit={(event) => { 
      event.preventDefault(); // prevent default behaviour of form submission (just like vanilla javascript)
      handleSubmit();
    }}>
      <div>
      <label className='form-input' htmlFor='name'>name</label>
      <input type='text' name='name' id='name' value={name} onInput={handleUpdate}/>
      <label className='form-input' htmlFor='description'>description</label>
      <input type='text' name='description' id='description' value={description} onInput={handleUpdate}/>
      <label className='form-input' htmlFor='animal'>animal</label>
      <input type='text' name='animal' id='animal' value={animal} onInput={handleUpdate}/>
      <label className='form-input' htmlFor='age'>age</label>
      <input type='text' name='age' id='age' value={age} onInput={handleUpdate}/>
      <label className='form-input' htmlFor='sex'>sex</label>
      <input type='text' name='sex' id='sex' value={sex} onInput={handleUpdate}/>
      <label className='form-input' htmlFor='breed'>breed</label>
      <input className='form-input' type='text' name='breed' id='breed' value={breed} onInput={handleUpdate}/>
      <label className='form-input' htmlFor='colour'>colour</label>
      <input type='text' name='colour' id='colour' value={colour} onInput={handleUpdate}/>
      <label className='form-input' htmlFor='location_lost'>location_lost</label>
      <input type='text' name='location_lost' id='location_lost' value={location_lost} onInput={handleUpdate}/>
      <label className='form-input' htmlFor='distinctive_features'>distinctive_features</label>
      <input type='text' name='distinctive_features' id='distinctive_features' value={distinctive_features} onInput={handleUpdate}/>
      <label className='form-input' htmlFor='flag'>flag</label>
      <input type='text' name='flag' id='flag' value={flag} onInput={handleUpdate}/>
      <label className='form-input' htmlFor='time_lost'>time_lost</label>
      <input type='text' name='time_lost' id='time_lost' value={time_lost} onInput={handleUpdate}/>
      <label className='form-input' htmlFor='pictures'>pictures</label>
      <input type='file' name='pictures' id='pictures' value={pictures} multiple onInput={handleUpdate}/>
      <input type='submit' value='Create Pet'/>
      </div> 
    </form>
  )
}

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
    <div className='petform-center'>
      <div className='petform-text'><h1 className='petform-h1'>That's very sad, but we are here to help you!</h1>
      <h2>The more details you provide the greater the chance that your pet will find way back home</h2>
      </div>
    
    </div>
    
    <div className='petform-container'>
          <form className='petform-form' onSubmit={(event) => { 
          event.preventDefault(); // prevent default behaviour of form submission (just like vanilla javascript)
          handleSubmit();
        }}>
          <div className='petform-inputs-container'>
            <div className='petform-left-side'>
            
                <label className='form-input' htmlFor='name'>name</label>
                <input type='text' name='name' id='name' value={name} onInput={handleUpdate}/>
                <label className='form-input' htmlFor='description'>description</label>
                <textarea type='text' name='description' id='description' value={description} onInput={handleUpdate}/>
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
            
            </div>
            <div className='petform-right-side'>
                  <label className='form-input' htmlFor='flag'>Choose a current status</label>
                  <select id='flag' name = 'flag' onChange={handleUpdate}>
                    <option value='' selected disabled hidden>What's the pet current status?</option>
                    <option value='lost' >Lost</option>
                    <option value='found' >Found</option>
                    <option value='returned' >Returned Home</option>
                  </select>
                  {/* <input type='text' name='flag' id='flag' value={flag} onInput={handleUpdate}/> */}
                  <label className='form-input' htmlFor='time_lost'>time_lost</label>
                  <input type='text' name='time_lost' id='time_lost' value={time_lost} onInput={handleUpdate}/>
                  <label className='form-input' htmlFor='image1'>image1</label>
                  <input type='text' name='image1' id='image1' value={image1} onInput={handleUpdate}/>
                  <label className='form-inpu2' htmlFor='image2'>image2</label>
                  <input type='text' name='image2' id='image2' value={image2} onInput={handleUpdate}/>
                  <label className='form-input' htmlFor='image3'>image3</label>
                  <input type='text' name='image3' id='image3' value={image3} onInput={handleUpdate}/>
                  <input type='submit' value='Create Pet'/>
            </div>
          </div> 
        </form>
    </div>
    
    </>
  )
}

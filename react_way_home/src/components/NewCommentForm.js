import React from "react";

function NewCommentForm(props) {
  function handleCommentSubmit(event) {
    const { currentTarget } = event;
    event.preventDefault();
    const fd = new FormData(currentTarget);

    props.onSubmit(props.pet.id, { title: fd.get('title'), body: fd.get("body") } );
  
  
    currentTarget.reset();
  }

  return (
    <form className='petform-form-container' onSubmit={handleCommentSubmit}>
      <div className='petform-form'>
          <input type='text' name='body' autoComplete='off' required ></input>
          <label for='body' className='label-name'> <span className='content-name'> Place your comment here </span> </label>
      </div>
      <div className='petform-form-submit'>
          <input className='submit' type='submit' value='Create comment'></input>
      </div>
    </form>
  );
}

export default NewCommentForm;

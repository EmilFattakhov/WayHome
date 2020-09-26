import React from "react";

function NewCommentForm(props) {
  function handleCommentSubmit(event) {
    const { currentTarget } = event;
    console.log('currentTarget', currentTarget)

    const fd = new FormData(currentTarget);

    props.onSubmit(props.pet.id, { title: fd.get('title'), body: fd.get("body") } );
    console.log('props pet id', props.pet.id);
    console.log('body for newComment', fd.get('body'));
    currentTarget.reset();
  }

  return (
    <form className='petform-form-container' onSubmit={handleCommentSubmit}>
      <div className='petform-form'>
          <input type='text' name='body' autoComplete='off' required ></input>
          <label for='body' className='label-name'> <span className='content-name'> Place your comment here </span> </label>
      </div>
      <div className='petform-form-submit'>
          <input type='submit' value='Create comment'></input>
      </div>
    </form>
      /* <div>
        <label>Title</label>
        <input type="text" name="title" id="title" />
        <label>Place your comment</label>
        <input type="text" name="body" id="body" />
      </div> */

    //   <button className="ui button" type="submit">
    //     Comment
    //   </button>
    // </form>
  );
}

export default NewCommentForm;

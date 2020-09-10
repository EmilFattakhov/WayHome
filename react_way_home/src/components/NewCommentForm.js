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
    <form onSubmit={handleCommentSubmit}>
      <div>
        <label>Title</label>
        <input type="text" name="title" id="title" />
        <label>Body</label>
        <input type="text" name="body" id="body" />
      </div>

      <button className="ui button" type="submit">
        Comment
      </button>
    </form>
  );
}

export default NewCommentForm;

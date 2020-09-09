import React from "react";

function NewCommentForm(props) {
  function handleCommentSubmit(event) {
    const { currentTarget } = event;

    const fd = new FormData(currentTarget);

    props.onSubmit(props.pet.id, { comment: fd.get("body") });

    currentTarget.reset();
  }

  return (
    <form className="ui form" onSubmit={handleCommentSubmit}>
      <div className="field">
        <label>Comment</label>
        <input type="text" name="body" id="body" />
      </div>

      <button className="ui button" type="submit">
        Comment
      </button>
    </form>
  );
}

export default NewCommentForm;

import React from "react";

function CommentForm(props) {
  const { onSubmit = () => {} } = props;

  const handleSubmit = event => {
    event.preventDefault();
    const { currentTarget } = event;

    const formData = new FormData(currentTarget);

    onSubmit({
      title: formData.get('title'),
      body: formData.get("body")
    });
    currentTarget.reset();
  };

  return (
    <form onSubmit={handleSubmit} className="AnswerForm">
      <input type='text' id='title' name='title'></input>  
      <textarea cols="40" rows="4" name="body" /> <br />
      <input type="submit" value="Submit" />
    </form>
  );
}

export default CommentForm;

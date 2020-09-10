import React from "react";

function NewLocationForm(props) {
  function handleCommentSubmit(event) {
    const { currentTarget } = event;
    console.log('currentTarget', currentTarget)

    
    const fd = new FormData(currentTarget);

    props.onSubmit(props.pet.id, { long: fd.get('long'), lat: fd.get("lat") } );

    currentTarget.reset();
  }

  return (
    <form onSubmit={handleCommentSubmit}>
      <div>
        <label>Long</label>
        <input type="text" name="long" id="long" />
        <label>Lat</label>
        <input type="text" name="lat" id="lat" />
      </div>

      <button className="ui button" type="submit">
        Location!
      </button>
    </form>
  );
}

export default NewLocationForm;

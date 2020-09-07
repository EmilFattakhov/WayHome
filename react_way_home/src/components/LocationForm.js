import React from "react";

function LocationForm(props) {
  const { onSubmit = () => {} } = props;

  const handleSubmit = event => {
    event.preventDefault();
    const { currentTarget } = event;

    const formData = new FormData(currentTarget);

    onSubmit({
      lat: formData.get('lat'),
      long: formData.get("long")
    });

    currentTarget.reset();
  };

  return (
    <form onSubmit={handleSubmit} className="LocationForm">
      <input type='text' id='lat' name='lat'></input>  
      <input type='text' id='long' name='long'></input>  
      <input type="submit" value="Submit" />
    </form>
  );
}

export default LocationForm;

import React from 'react';
import Pdf from "react-to-pdf";

const ref = React.createRef();

const PDF = (props) => {
  return (
    <>
      <div style={{height: 1000, width:2000, background: 'lightblue'}} ref={ref}>
        <h1>Name: {props.name}</h1>
        <h3>Description: {props.description}</h3>
        <h3>Animal: {props.animal}</h3>
        <h3>Age: {props.age}</h3>
        <h3>Sex: {props.sex}</h3>
        <h3>Breed: {props.breed}</h3>
        <h3>Colour: {props.colour}</h3>
        <h3>Wheere Lost{props.location_lost}</h3>
        <h3>Distinctive features {props.distinctive_features}</h3>
        <h3>Time lost{props.time_lost}</h3>
        <img src={props.image} alt={props.name} height='300' width='300' />
      </div>
      <Pdf targetRef={ref} filename="post.pdf">
        {({ toPdf }) => <button onClick={toPdf}>Capture as PDF</button>}
      </Pdf>
    </>
  );
}

export default PDF;
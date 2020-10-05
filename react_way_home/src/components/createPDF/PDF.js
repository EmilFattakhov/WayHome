import React from 'react';
import Pdf from "react-to-pdf";
import './PDF.css';

const ref = React.createRef();

const PDF = (props) => {
  return (
    <div>
      <Pdf targetRef={ref} filename="post.pdf">
        {({ toPdf }) => <button onClick={toPdf}>Capture as PDF</button>}
      </Pdf>
      <div ref={ref}>
        <div>
          <h1>Name: {props.name}</h1>
          <h3>Description: {props.description}</h3>
          <h3>Animal: {props.animal}</h3>
          <h3>Where Lost: {props.location_lost}</h3>
          <h3>Distinctive features: {props.distinctive_features}</h3>
          <h3>Time lost: {props.time_lost}</h3>
          <img src={props.image} alt={props.name} height='300' width='300' />
        </div>
      </div>
      
    </div>
  );
}

export default PDF;
import React from 'react';
import Pdf from "react-to-pdf";
import './PDF.css';

const ref = React.createRef();

 

const PDF = (props) => {
  const image = props.image
  
  const imageStyle = {
    backgroundImage: "url("+image+")",
  }
  return (
    <>
    <div className='center-button'>
      <Pdf targetRef={ref} filename="Lost_Pet_Flyer.pdf">
        {({ toPdf }) => <button onClick={toPdf}>Save as PDF</button>}
      </Pdf>
      </div>
      <div>
      <div>
        <div className='pet-pdf-container'>
          <div className='pet-pdf' style={{width:'750px'}} ref={ref}>
            <h1 className='pdf-description'>Lost pet!</h1>
            <h1 className='pdf-description'>Please contact me if you have seen my <span>{props.animal}</span></h1>
            <h1 className='pdf-name'><span>Name: </span>{props.name}</h1>
            <img src={props.image} alt={props.name} style={ {width:"100%", height:"auto"} } />
            <h3 className='pdf-prop'><span>Description:</span> {props.description}</h3>
            <h3 className='pdf-prop'><span>Animal:</span> {props.animal}</h3>
            <h3 className='pdf-prop'><span>Colour:</span> {props.colour}</h3>
            <h3 className='pdf-prop'><span>Where Lost:</span> {props.location_lost}</h3>
            <h3 className='pdf-prop'><span>Distinctive features:</span> {props.distinctive_features}</h3>
            <h3 className='pdf-prop'><span>Time lost:</span> {props.time_lost}</h3>
            <h3 className='pdf-prop'><span>Contact number:</span> {props.contact_number}</h3>
            
            {/* <div className='image' style={ imageStyle }></div> */}
          </div>
        </div>
      </div>
      
    </div>
    </>
  );
}

export default PDF;
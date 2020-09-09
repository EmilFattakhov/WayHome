import React, { Component} from "react";
import Home from './mapsFeatures/Home';

class LocationForm extends Component {
  constructor(props) {
    super(props); 
    this.state = {
      home: {
        google: props.google,
        center: {lat: 49.282730, lng: -123.120735},
        height: '300px',
        zoom: 14,
      },
      address: '',
			city: '',
			area: '',
			state: '',
			mapPosition: {
				lat: this.props.center.lat,
				lng: this.props.center.lng
			},
			markerPosition: {
				lat: this.props.center.lat,
				lng: this.props.center.lng
			}
    }

    // this.deleteComment = this.deleteComment.bind(this) 
    // this.createComment = this.createComment.bind(this)
    // this.createLocation = this.createLocation.bind(this)
    // this.updatePet = this.updatePet.bind(this)
  }

  render() {
    return(
      <form className="LocationForm">
      <Home></Home>
      <input type='text' id='lat' name='lat'></input>  
      <input type='text' id='long' name='long'></input>  
      <input type="submit" value="Submit" />
    </form>
    )
  }
}

export default LocationForm;

// function LocationForm(props) {
//   const { onSubmit = () => {} } = props;


//   const handleSubmit = event => {
//     event.preventDefault();
//     const { currentTarget } = event;

//     const formData = new FormData(currentTarget);

//     onSubmit({
//       lat: formData.get('lat'),
//       long: formData.get("long")
//     });

//     currentTarget.reset();
//   };

//   return (
    
//   );
// }

// export default LocationForm;

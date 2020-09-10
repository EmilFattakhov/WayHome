import React, {Component} from "react";
import { withGoogleMap, GoogleMap, withScriptjs, InfoWindow, Marker } from "react-google-maps";
import Geocode from "react-geocode";
import Autocomplete from 'react-google-autocomplete';
import { GoogleMapsAPI } from './mapsFeatures/client/client-config';
Geocode.setApiKey( GoogleMapsAPI );
Geocode.enableDebug();

class NewLocationForm extends Component {
  constructor(props){
    super(props);
    this.state = {
      google: this.props.google,
      center: {lat: 49.282730, lng: -123.120735},
      height: '300px',
      zoom: 14,
      map:{
        address: '',
			  city: '',
			  area: '',
			  state: '',
      },
      mapPosition: {
        lat: 49.282730,
        lng: -123.120735,
        },
      markerPosition: {
        lat: 49.282730,
        lng: -123.120735,
        }
    }
    this.handleLocationSubmit = this.handleLocationSubmit.bind(this);
    // this.createPet = this.createPet.bind(this)
    // this.updatePetParams = this.updatePetParams.bind(this);
    this.componentDidMount = this.componentDidMount.bind(this);
    this.shouldComponentUpdate = this.shouldComponentUpdate.bind(this);
    this.onMarkerDragEnd = this.onMarkerDragEnd.bind(this);
  }

  handleLocationSubmit(event){
    const { currentTarget } = event;
    const fd = new FormData(currentTarget);
    this.props.onSubmit(this.props.pet.id, { long: fd.get('long'), lat: fd.get("lat") } );
    currentTarget.reset();
  }

  componentDidMount() {
		Geocode.fromLatLng( this.state.mapPosition.lat , this.state.mapPosition.lng ).then(
			response => {
				const address = response.results[0].formatted_address,
				      addressArray =  response.results[0].address_components,
				      city = this.getCity( addressArray ),
				      area = this.getArea( addressArray ),
				      state = this.getState( addressArray );

				this.setState( { map: {
					address: ( address ) ? address : '',
					area: ( area ) ? area : '',
					city: ( city ) ? city : '',
					state: ( state ) ? state : '',
        }} )
			},
			error => {
				console.error( error );
			}
		);
  };
  
  shouldComponentUpdate( nextProps, nextState ){
		if (
			this.state.markerPosition.lat !== this.state.center.lat ||
			this.state.map.address !== nextState.address ||
			this.state.map.city !== nextState.city ||
			this.state.map.area !== nextState.area ||
			this.state.map.state !== nextState.state
		) {
			return true
		} else if ( this.props.center.lat === nextProps.center.lat ){
			return false
		}
  }
  
  getCity = ( addressArray ) => {
		let city = '';
		for( let i = 0; i < addressArray.length; i++ ) {
			if ( addressArray[ i ].types[0] && 'administrative_area_level_2' === addressArray[ i ].types[0] ) {
				city = addressArray[ i ].long_name;
				return city;
			}
		}
  };
  
  getArea = ( addressArray ) => {
		let area = '';
		for( let i = 0; i < addressArray.length; i++ ) {
			if ( addressArray[ i ].types[0]  ) {
				for ( let j = 0; j < addressArray[ i ].types.length; j++ ) {
					if ( 'sublocality_level_1' === addressArray[ i ].types[j] || 'locality' === addressArray[ i ].types[j] ) {
						area = addressArray[ i ].long_name;
						return area;
					}
				}
			}
		}
  };
  
  getState = ( addressArray ) => {
		let state = '';
		for( let i = 0; i < addressArray.length; i++ ) {
			for( let i = 0; i < addressArray.length; i++ ) {
				if ( addressArray[ i ].types[0] && 'administrative_area_level_1' === addressArray[ i ].types[0] ) {
					state = addressArray[ i ].long_name;
					return state;
				}
			}
		}
  };
  
  onChange = ( event ) => {
		this.setState({ map: { [event.target.name]: event.target.value }});
  };
  
  onInfoWindowClose = ( event ) => {

  };
  
  onMarkerDragEnd = ( event ) => {
		let newLat = event.latLng.lat(),
		    newLng = event.latLng.lng();

		Geocode.fromLatLng( newLat , newLng ).then(
			response => {
				const address = response.results[0].formatted_address,
				      addressArray =  response.results[0].address_components,
				      city = this.getCity( addressArray ),
				      area = this.getArea( addressArray ),
				      state = this.getState( addressArray );
          this.setState(prevState => ({
            map:{
              address: (address) ? address : '',
              area: ( area ) ? area : '',
					    city: ( city ) ? city : '',
              state: ( state ) ? state : '',
            },
            markerPosition: {
              lat: newLat,
              lng: newLng
            },
            mapPosition: {
              lat: newLat,
              lng: newLng
            },
            // newPetParams: {
            //   ...prevState.newPetParams,
            //   location_lost: address,
            // }
          }))
			},
			error => {
				console.error(error);
			}
		);
  };
  
  onPlaceSelected = ( place ) => {
		console.log( 'plc', place );
		const address = place.formatted_address,
		      addressArray =  place.address_components,
		      city = this.getCity( addressArray ),
		      area = this.getArea( addressArray ),
		      state = this.getState( addressArray ),
		      latValue = place.geometry.location.lat(),
		      lngValue = place.geometry.location.lng();
		// Set these values in the state.
		this.setState({ map: {
			address: ( address ) ? address : '',
			area: ( area ) ? area : '',
			city: ( city ) ? city : '',
      state: ( state ) ? state : ''
      },
			markerPosition: {
				lat: latValue,
				lng: lngValue
			},
			mapPosition: {
				lat: latValue,
				lng: lngValue
      },
      // newPetParams: {
      //   location_lost: address,
      // },
		})
	};

  render(){
    const AsyncMap = withScriptjs(
			withGoogleMap(
				props => (
					<GoogleMap google={ this.state.google }
					           defaultZoom={ this.state.zoom }
					           defaultCenter={{ lat: this.state.mapPosition.lat, lng: this.state.mapPosition.lng }}
					>
						
						<InfoWindow
							onClose={this.onInfoWindowClose}
							position={{ lat: ( this.state.markerPosition.lat + 0.0018 ), lng: this.state.markerPosition.lng }}
						>
							<div>
								<span style={{ padding: 0, margin: 0 }}>{ this.state.map.address }</span>
							</div>
						</InfoWindow>
						
						<Marker google={this.props.google}
						        name={'Dolores park'}
						        draggable={true}
						        onDragEnd={ this.onMarkerDragEnd }
						        position={{ lat: this.state.markerPosition.lat, lng: this.state.markerPosition.lng }}
						/>
						<Marker />
						
						<Autocomplete
							style={{
								width: '100%',
								height: '40px',
								paddingLeft: '16px',
								marginTop: '2px',
								marginBottom: '500px'
							}}
							onPlaceSelected={ this.onPlaceSelected }
							types={['(regions)']}
						/>
					</ GoogleMap >
        )
			)
		);
    
    let showmap;
		if (this.state.center.lat !== undefined ) {
      showmap = <div>
				<div>
					<div className="form-group">
						<label htmlFor="">City</label>
						<input type="text" name="city" className="form-control" onChange={ this.onChange } readOnly="readOnly" value={ this.state.map.city }/>
					</div>
					<div className="form-group">
						<label htmlFor="">Area</label>
						<input type="text" name="area" className="form-control" onChange={ this.onChange } readOnly="readOnly" value={ this.state.map.area }/>
					</div>
					<div className="form-group">
						<label htmlFor="">State</label>
						<input type="text" name="state" className="form-control" onChange={ this.onChange } readOnly="readOnly" value={ this.state.map.state }/>
					</div>
					<div className="form-group">
						<label htmlFor="">Address</label>
						<input type="text" name="address" className="form-control" onChange={ this.onChange } readOnly="readOnly" value={ this.state.map.address }/>
					</div>
				</div>

				<AsyncMap
					googleMapURL={`https://maps.googleapis.com/maps/api/js?key=${GoogleMapsAPI}&libraries=places&language=en`}
					loadingElement={
						<div style={{ height: `100%` }} />
					}
					containerElement={
						<div style={{ height: this.state.height }} />
					}
					mapElement={
						<div style={{ height: `100%` }} />
					}
				/>
			</div>
		} else {
			showmap = <div style={ {height: this.state.height} } />
    }
    
    return(
      <form onSubmit={this.handleLocationSubmit}>
       <div>
         <label>Long</label>
         <input type="text" name="long" id="long" value={this.state.markerPosition.lng} />
         <label>Lat</label>
         <input type="text" name="lat" id="lat" value={this.state.markerPosition.lat} />
       </div>
       <button className="ui button" type="submit">
         Location!
       </button>
       {showmap} 
     </form>
    )
  }
}

export default NewLocationForm;

// function NewLocationForm(props) {
//   function handleCommentSubmit(event) {
//     const { currentTarget } = event;
//     console.log('currentTarget', currentTarget)


//     const fd = new FormData(currentTarget);

//     props.onSubmit(props.pet.id, { long: fd.get('long'), lat: fd.get("lat") } );

//     currentTarget.reset();
//   }

//   return (
//     <form onSubmit={handleCommentSubmit}>
//       <div>
//         <label>Long</label>
//         <input type="text" name="long" id="long" />
//         <label>Lat</label>
//         <input type="text" name="lat" id="lat" />
//       </div>

//       <button className="ui button" type="submit">
//         Location!
//       </button>
//     </form>
//   );
// }

// export default NewLocationForm;

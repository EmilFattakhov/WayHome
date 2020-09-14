import React, { Component } from 'react'
import NewPetForm from './NewPetForm';
import { Pet } from '../requests';
import { withGoogleMap, GoogleMap, withScriptjs, InfoWindow, Marker } from "react-google-maps";
import Geocode from "react-geocode";
import Autocomplete from 'react-google-autocomplete';
import { GoogleMapsAPI } from './mapsFeatures/client/client-config';
Geocode.setApiKey( GoogleMapsAPI );
Geocode.enableDebug();


class PetCreatePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newPetParams: {
        name: '',
        description: '',
        animal: '',
        age: '',
        sex: '',
        breed: '',
        colour: '',
        location_lost: '',
        distinctive_features: '',
        flag: '',
        time_lost: '',
		image1: '',
		image2: '',
		image3: '',
		lat: '',
		lng: '',
      },
      errors: { },
      map: {
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
      ,
      google: this.props.google,
      center: {
        lat: 49.282730,
        lng: -123.120735,
      },
      height: '300px',
      zoom: 14,
    };

    this.createPet = this.createPet.bind(this)
    this.updatePetParams = this.updatePetParams.bind(this);
    this.componentDidMount = this.componentDidMount.bind(this);
    this.shouldComponentUpdate = this.shouldComponentUpdate.bind(this);
    this.onMarkerDragEnd = this.onMarkerDragEnd.bind(this);

  }

  updatePetParams(params) {
    this.setState( (state) => {
      const newPetCopy = {...state.newPetParams};
      return {
        newPetParams: {
          ...newPetCopy,
          ...params
        }
      }
    })
  }

  createPet() {
    Pet.create(this.state.newPetParams)
      .then(res => {
        if(res.id) {
          this.props.history.push(`/pets/${res.id}`)
        }
        if (res.errors) {
          this.setState(() => {
            return {
              errors: res.errors
            }
          })
        }
      });
  }

  updatePet() {
    Pet.update(this.state.newPetParams)
      .then(res => {
        if(res.id) {
          this.props.history.push(`/pets/${res.id}`)
        }
        if (res.errors) {
          this.setState(() => {
            return {
              errors: res.errors
            }
          })
        }
      });
  }

  componentDidMount() {
		Geocode.fromLatLng( this.state.mapPosition.lat , this.state.mapPosition.lng ).then(
			response => {
				const address = response.results[0].formatted_address,
				      addressArray =  response.results[0].address_components,
				      city = this.getCity( addressArray ),
				      area = this.getArea( addressArray ),
				      state = this.getState( addressArray );

				console.log( 'city', city, area, state );

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
    console.log('all state', this.state)
    console.log('pet params', this.state.newPetParams)
    console.log(this.state.map)
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
    console.log(event)
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
				// this.setState( 
        //   { map: {
				// 	address: ( address ) ? address : '',
				// 	area: ( area ) ? area : '',
				// 	city: ( city ) ? city : '',
        //   state: ( state ) ? state : '',
        //   },
				// 	markerPosition: {
				// 		lat: newLat,
				// 		lng: newLng
				// 	},
				// 	mapPosition: {
				// 		lat: newLat,
				// 		lng: newLng
        //   },
        //   // newPetParams: {
        //   //   location_lost: city,
        //   //   },
        //   })
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
            newPetParams: {
              ...prevState.newPetParams,
			  location_lost: address,
			  lat: newLat,
			  lng: newLng,
            }
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

  render() {
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
      <main id='question-create-page'>
        {
          Object.keys(this.state.errors).map(key => {
            return(
            <div>{key} {this.state.errors[key].join(', ')}</div>
            )
          })
        }
       
        <NewPetForm
		
          handleSubmit={this.createPet}
          name={this.state.newPetParams.name}
          description={this.state.newPetParams.description}
          animal={this.state.newPetParams.animal}
          age={this.state.newPetParams.age}
          sex={this.state.newPetParams.sex}
          breed={this.state.newPetParams.breed}
          colour={this.state.newPetParams.colour}
          location_lost={this.state.map.address}
          // location_lost={this.state.newPetParams.location_lost}
          distinctive_features={this.state.newPetParams.distinctive_features}
          flag={this.state.newPetParams.flag}
          time_lost={this.state.newPetParams.time_lost}
		  image1={this.state.newPetParams.image1}
		  image2={this.state.newPetParams.image2}
		  image3={this.state.newPetParams.image3}
          updatePetParams={this.updatePetParams}
        />
        {/* to show pet's picture */}
        {/* {
          (this.state.newPetParams.pictures[0]) ? (
            <div>
            <img width="100" height="100" src={this.state.newPetParams.pictures[0]} />
            </div>
          ) : null
          } */}

          {showmap} 
        {/* Remember! when you pass down a method as a function through props the `this` value within the, now, function will be the global scope! So we need to make sure we bind the method to force the `this` value to be QuestionCreatePage */}
      </main>
    )
  }
}

export default PetCreatePage
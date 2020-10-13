import React, { Component } from 'react';
import PetDetails from './PetDetails';
import CommentsList from './CommentsList';
import LocationsList from './LocationsList';
import { Pet, Comment, Location } from '../requests';
import NewCommentForm from './NewCommentForm';
import CommentForm from './CommentForm';
import NewLocationForm from './NewLocationForm';
import NewPetForm from './NewPetForm'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel'
import { withGoogleMap, GoogleMap, withScriptjs, InfoWindow, Marker, HeatMap } from "react-google-maps";
import Geocode from "react-geocode";
import Autocomplete from 'react-google-autocomplete';
import { GoogleMapsAPI } from './mapsFeatures/client/client-config';
import ContactForm from './EmailJS/ContactForm'



Geocode.setApiKey( GoogleMapsAPI );
Geocode.enableDebug();


class PetShowPage extends Component {
  constructor(props) {
    super(props); 
    this.state = {
      pet: {},
      locat: {},
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
        },
      showPetForm : false,
      showLocationForm : false,
      showContactForm: false,
    }
    this.createLocation = this.createLocation.bind(this);
    this.updatePet=this.updatePet.bind(this);
    this.updatePetParams=this.updatePetParams.bind(this);
    this.buttonPetFormClick=this.buttonPetFormClick.bind(this);
    this.buttonMapClick = this.buttonMapClick.bind(this);
    this.buttonContactFormClick= this.buttonContactFormClick.bind(this);
    this.getPet = this.getPet.bind(this);
    this.sendLetter = this.sendLetter.bind(this);
    
  }

  componentDidMount() {
    this.getPet();
  
      Geocode.fromLatLng( this.state.pet.lat , this.state.pet.lng ).then(
        response => {
          const address = response.results[0].formatted_address,
                addressArray =  response.results[0].address_components;
  
          this.setState( { map: {
            address: ( address ) ? address : '',
          }} )
        },
        error => {
          console.error( error );
        }
      );
  }

  getPet() {
    Pet.show(this.props.match.params.id)
      .then(pet => {
        this.setState(() => {
          return {
            pet: pet,
            mapPosition: {
              lat: parseFloat(pet.lat),
              lng: parseFloat(pet.lng),
            },
            markerPosition: {
              lat: parseFloat(pet.lat),
              lng: parseFloat(pet.lng),
            }
          }
        })
      }).then(()=>{
        console.log('pet', this.state.pet)
      })
  }

  updatePet() {
    Pet.update(this.state.pet)
      .then(res => {
        if(res.id) {
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

  updatePetParams(params) {
    this.setState( (state) => {
      const newPetCopy = {...state.pet};
      return {
        pet: {
          ...newPetCopy,
          ...params
        }
      }
    })
  }

  deleteComment(id) { 
    this.setState((currentState) => {
      const petCopy = JSON.parse(JSON.stringify(currentState.pet));
      const newComments = petCopy.comments.filter((currentComment) => {
        return currentComment.id !== id;
      })
      petCopy.comments = newComments
      return {
        pet: petCopy
      }
    })
  }

  createComment = (id, params) => {

    Comment.create(id, params).then(comment => {
      // this.props.history.push(`./pets/${this.state.pet.id}`)
    
      if (comment.errors) {
        this.setState({ errors: comment.errors });
      }
    }).then (() => {
      this.getPet();
    });
  };
 


  createLocation = (id, params) => {
    Location.create(id, params).then(location=> {
      if (location.errors) {
        this.setState( {errors: location.errors } )
      }
    }).then (() => {
      this.getPet();
    }).then (() => {
      this.setState( {showLocationForm : false})
    });
  };

  sendLetter = () => {
      this.setState( {showContactForm : false})
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
  
  buttonPetFormClick() {
    this.setState( {showPetForm : true})
  }

  buttonMapClick() {
    this.setState( {showLocationForm : true})
    window.scrollBy(0, 1000)
  }

  buttonContactFormClick() {
    this.setState( {showContactForm : true})
    window.scrollBy(0, 1000)
  }

  

  render() {
    
    const AsyncMap = withScriptjs(
			withGoogleMap(
				props => (
					<GoogleMap google={ this.state.google }
					           defaultZoom={ this.state.zoom }
                     defaultCenter={{ lat: this.state.mapPosition.lat, lng: this.state.mapPosition.lng }}
                     heatmapLibrary={true}

					>	
						<Marker position={{ lat: this.state.markerPosition.lat, lng: this.state.markerPosition.lng }}/>
            { this.state.pet.locations? (this.state.pet.locations.map( (location, i) => {
              
              return(<Marker position={{ lat: parseFloat(location.lat), lng: parseFloat(location.long) }} > </Marker>)
            })) : '' };  
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

    const currentUser = this.props.currentUser;
    
    return(
      <main>
        
          <div className='petshow-container'>
            <div className='petshow-left'>
              <Carousel className='petshow-carousel' showThumbs={false} showStatus={false}>
                <div className='petshow-carousel-image'>
                  <img className='petshow-image' src={this.state.pet.image1}></img>
                </div>
                <div className='petshow-carousel-image'>
                  <img className='petshow-image' src={this.state.pet.image2}></img>
                </div>
                <div className='petshow-carousel-image'>
                  <img className='petshow-image' src={this.state.pet.image3}></img>
                </div>
              </Carousel>
            </div>
          <div className='petshow-right'>
            <PetDetails pet={this.state.pet}/>
          </div>
        </div>
        <div className='petshow-container'>
            <div className='petshow-map-and-buttons-left'>
            { this.state.showLocationForm? 
            (<> <div className='petshow-map-left'>  <h1>Point to the location you've seen {this.state.pet.name} on the map</h1> <NewLocationForm pet={this.state.pet} onSubmit={this.createLocation}></NewLocationForm> </div> </>)
             :
              (<div className='petshow-map-left'>
                <h1>{this.state.pet.name} was spotted here: </h1>
                {showmap} 
              </div>) 
            }
            </div>
            <div className='petshow-map-and-buttons-right'> 
              <button className='petshow-button' onClick={this.buttonMapClick}>I've seen {this.state.pet.name}</button>
              <button className='petshow-button' onClick={this.buttonContactFormClick}>I've found {this.state.pet.name}</button> 
              <h2>Comments</h2>
              <CommentsList comments={this.state.pet.comments} handleDeleteComment={this.state.deleteComment}/>
              <NewCommentForm pet={this.state.pet} onSubmit={this.createComment}></NewCommentForm>
            </div>
        </div>
        <div className='petshow-container'>
          <div className='petshow-container-location'>    
              <div className='petshow-map-left'> { this.state.showContactForm? (<ContactForm pet={this.state.pet} onSubmit={this.sendLetter}> </ContactForm>) :'' } </div>
          </div>
        </div>
      </main>
    )
  }
}

export default PetShowPage
import React, { Component } from 'react'
import { Pet } from '../requests';
import { Link } from 'react-router-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel'


class PetIndexPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pets: [],
    }
    this.deletePet = this.deletePet.bind(this);
  }

  componentDidMount() {
    Pet.index()
      .then(pets => {
        this.setState((state) => {
          return {
            pets: pets
          }
        })
      });
  }

  deletePet(event) {
    const { currentTarget } = event;
    const { pets } = this.state;
    const petId = parseInt(currentTarget.dataset.id, 10);

    this.setState({
      pets: pets.filter(p => p.id !== petId)
    });
  }

  
  render() {
    return(
      <main>
        <h1 className='lostpets'>Recently lost pets</h1>
        <div className='griddiv'>
          {this.state.pets.map((pet) => {
            console.log(pet)
            return(
              <>
                <div className='grid-element' key={pet.id}>
                { pet.flag == 'found' ? <div className='found'></div> : ""}
                { pet.flag == 'lost' ? <div className='lost'></div> : ""}
                { pet.flag == 'returned' ? <div className='returned'></div> : ""}
                    <Carousel className="carousel1" showThumbs={false} showStatus={false} boardArrows>
                      <div className='image-cropper'>
                        <img className='profile-pic' src={pet.image1}></img>
                      </div>
                      <div className='image-cropper'>
                        <img className='profile-pic' src={pet.image2}></img>
                      </div>
                      <div className='image-cropper'>
                        <img className='profile-pic' src={pet.image3}></img>
                      </div>
                    </Carousel>
                    <div className='petname'><Link to={`/pets/${pet.id}`}> <h1 className='name'> {pet.name} </h1> </Link></div>
                    {/* <button data-id={pet.id} onClick={this.deletePet}>Delete</button> */}
                 </div>
                 </>)
          })}
          </div>
      </main>
    )
  }
}

export default PetIndexPage;
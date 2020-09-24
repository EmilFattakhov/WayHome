import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel'


const Search = ({ location }) => {
    const [searchParams, setSearchParams] = useState('');
    const [input, setInput] = useState('');
    const [pets, setPets] = useState([]);
  
    useEffect(() => {
      
      const params = new URLSearchParams(location.search);
     
      const tag = params.get('tag');
      
      setSearchParams(tag ? tag : 'dog');
    }, []);
  
    const submitAction = (e) => {
      e.preventDefault();
      setSearchParams(input);
      axios.get('http://localhost:3000/api/v1/tags?tag=' + input).then((response) => { setPets(response.data)})
      console.log(pets)
      setInput('');
    };
  
    return (
      <>
            <form onSubmit={submitAction} className='mt-5'>
              <div className='input-group'>
                <input
                  type='text'
                  className='form-control'
                  placeholder='Type your pet parameters...'
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                />
                <div className='input-group-append'>
                  <button className='btn btn-primary' type='submit'>
                    Go!
                  </button>
                </div>
              </div>
            </form>
            <div className='griddiv'>
          {pets.map((pet) => {
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
                        </div>
            </>)
                    })}
                 </div>
          
      </>
    );
  };
  
  export default Search;
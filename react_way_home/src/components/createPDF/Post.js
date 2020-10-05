import React, { Component } from 'react';
import PDF from './PDF';
import './Post.css';

class Post extends Component {
    state = {
        name: '',
        description: '',
        animal: '',
        location_lost: '',
        time_lost: '',
        distinctive_features: '',
        image: '',
        postSubmitted: false
    }

    onChange = input => e => {
        console.log('e', e);
        console.log('e.target.value', e.target.value)
        console.log('input', input)
        this.setState({
            [input]: e.target.value
        });
    }

    submitPost = (e) => {
        
        if(!this.state.name || !this.state.description){
            alert('Please fill name and description fields!');
            e.preventDefault();
        }else{
            this.setState({
                postSubmitted: true
            });
        }
    }

    render(){
        return(
            <>
                {  !this.state.postSubmitted ? 
                    (
                        <div className='petform-container'>
                            <form className='petform-form-container' method='post'>
                                <div className='petform-form'>
                                    <input type='text' onChange={this.onChange('name')} name="name" autoComplete='off' required ></input>
                                    <label for='name' className='label-name'> <span className='content-name'> Name </span> </label>
                                </div>
                                <div className='petform-form'>
                                    <input onChange={this.onChange('description')} name="description" autoComplete='off' required ></input>
                                    <label for='description' className='label-name'> <span className='content-name'> Description </span> </label>
                                </div>
                                <div className='petform-form'>
                                    <input onChange={this.onChange('animal')} name="animal" type="text" autoComplete='off' required ></input>
                                    <label for='animal' className='label-name'> <span className='content-name'> Animal </span> </label>
                                </div>
                                <div className='petform-form'>
                                    <input onChange={this.onChange('location_lost')} name="location_lost" type="text" autoComplete='off' required ></input>
                                    <label for='location_lost' className='label-name'> <span className='content-name'> Location Lost </span> </label>
                                </div>
                                <div className='petform-form'>
                                    <input onChange={this.onChange('distinctive_features')} name="distinctive_features" type="text" autoComplete='off' required ></input>
                                    <label for='distinctive_features' className='label-name'> <span className='content-name'> Distinctive Features </span> </label>
                                </div>
                                <div className='petform-form'>
                                    <input onChange={this.onChange('time_lost')} name="time_lost" type="text" autoComplete='off' required ></input>
                                    <label for='time_lost' className='label-name'> <span className='content-name'> Time Lost </span> </label>
                                </div>
                                <div className='petform-form'>
                                    <input onChange={this.onChange('image')} name="image" type="text" autoComplete='off' required ></input>
                                    <label for='image' className='label-name'> <span className='content-name'> Image </span> </label>
                                </div>
                                <div className='petform-form-submitm'>
                                    <button type="button" onClick={this.submitPost}>Submit</button>
                                </div>
                            </form>
                        </div>
                    ) : (
                        <PDF name={this.state.name} description={this.state.description} image={this.state.image} animal={this.state.animal} age={this.state.age} sex={this.state.sex} breed={this.state.breed} colour={this.state.colour} location_lost={this.state.location_lost} distinctive_features={this.state.distinctive_features} />
                    )
                }
            </>
        );
    }
}

export default Post;
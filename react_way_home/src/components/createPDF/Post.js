import React, { Component } from 'react';
import PDF from './PDF';
import './Post.css';

class Post extends Component {
    state = {
        name: '',
        description: '',
        animal: '',
        age: '',
        sex: '',
        breed: '',
        colour: '',
        location_lost: '',
        time_lost: '',
        distinctive_features: '',
        image: '',
        postSubmitted: false
    }

    onChange = input => e => {
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
                                    <input onChange={this.onChange('time_lost')} name="time_lost" type="text" autoComplete='off' required ></input>
                                    <label for='time_lost' className='label-name'> <span className='content-name'> Time Lost </span> </label>
                                </div>
                                <div className='petform-form'>
                                    <input onChange={this.onChange('image')} name="image" type="text" autoComplete='off' required ></input>
                                    <label for='image' className='label-name'> <span className='content-name'> Image </span> </label>
                                </div>
                                <div className='petform-form'>
                                    <button type="button" onClick={this.submitPost}>Submit</button>
                                </div>
                            </form>
                        </div>
                                    // <div>
                                    //     <form method="post">
                                    //         <fieldset>
                                    //             <legend>Create a Lost Pet Template</legend>
                                    //             <div>  
                                    //                 <input onChange={this.onChange('name')} name="name" type="text" placeholder="Name" />
                                    //             </div>
                                    //             <div>
                                    //                 <textarea onChange={this.onChange('description')} name="description" placeholder="Please describe your pet" rows="7"></textarea>
                                    //             </div>
                                    //             <div>  
                                    //                 <input onChange={this.onChange('animal')} name="animal" type="text" placeholder="Animal" />
                                    //             </div>
                                    //             <div>  
                                    //                 <input onChange={this.onChange('age')} name="age" type="text" placeholder="Age" />
                                    //             </div>
                                    //             <div>  
                                    //                 <input onChange={this.onChange('sex')} name="sex" type="text" placeholder="Sex" />
                                    //             </div>
                                    //             <div>  
                                    //                 <input onChange={this.onChange('breed')} name="breed" type="text" placeholder="Breed" />
                                    //             </div>
                                    //             <div>
                                    //                 <input onChange={this.onChange('location_lost')} name="location_lost" type="text" placeholder="Location Lost" />
                                    //             </div>
                                    //             <div>
                                    //                 <input onChange={this.onChange('time_lost')} name="time_lost" type="text" placeholder="Time Lost" />
                                    //             </div>
                                    //             <div>
                                    //                 <input onChange={this.onChange('image')} name="image" type="text" placeholder=" Image https://" />
                                    //             </div>
                                    //             <div>
                                    //                 <button type="button" onClick={this.submitPost}>Submit</button>
                                    //             </div>
                                    //         </fieldset>
                                    //     </form>
                                    // </div>) 
                                    ) : (
                        <PDF name={this.state.name} description={this.state.description} image={this.state.image} animal={this.state.animal} age={this.state.age} sex={this.state.sex} breed={this.state.breed} colour={this.state.colour} location_lost={this.state.location_lost} distinctive_features={this.state.distinctive_features} />
                    )
                }
            </>
        );
    }
}

export default Post;
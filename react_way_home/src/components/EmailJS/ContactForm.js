import React from 'react';
import emailjs from 'emailjs-com';
import { Pet } from '../../requests';

export default function ContactForm( {pet, onSubmit}) {
    function sendEmail(e) {
        e.preventDefault();

        emailjs.sendForm('gmail', "template_gi0tkm3", e.target, 'user_5sVuwLLfUoMzy5dHxvvuj')
            .then((result) => {
                console.log(result.text)
            }, (error) => {
                console.log(error.text);
            }).then( () => {
                onSubmit();
            }).then(() =>{
                alert('Email has been sent')
            })
            
    }

    return(
        <div>
            <div>
                <form className='contact-form-container' onSubmit={sendEmail}>
                    <div> <h1>Send email to the pet owner</h1> </div>
                    <div className='contact-form'> <input type='text' placeholder='Your Name' name='name'/> </div>
                    <div className='email-hidden'> <input type='email' name='email' value={pet.author.email}></input></div>
                    <div className='email-hidden'> <input type='text' name='authorname' value={pet.author.full_name}></input></div>
                    <div className='contact-form'> <input type='email' placeholder='Your email address' name='useremail'/>  </div>
                    <div className='contact-form'> <input type='text' placeholder='Your message' name='message'/> </div>
                    <div className='contact-form'> <input type='submit' value='Send Message'/> </div>
                </form>
            </div>
        </div>
    )
}
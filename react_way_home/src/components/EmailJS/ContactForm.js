import React from 'react';
import emailjs from 'emailjs-com';

export default function ContactForm() {
    function sendEmail(e) {
        e.preventDefault();

        emailjs.sendForm('gmail', "template_gi0tkm3", e.target, 'user_5sVuwLLfUoMzy5dHxvvuj')
            .then((result) => {
                console.log(result.text)
            }, (error) => {
                console.log(error.text);
            });
    }

    return(
        <div>
            <div>
                <form onSubmit={sendEmail}>
                    <div> <input type='text' placeholder='Name' name='name'/> </div>
                    <div> <input type='email' placeholder='Email address' name='email'/>  </div>
                    <div> <textarea cols='10' rows='8' placeholder='Your message' name='message'/> </div>
                    <div> <input type='submit' value='Send Message'/> </div>
                </form>
            </div>
        </div>
    )
}
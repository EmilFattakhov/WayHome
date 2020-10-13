import React, {useState} from 'react';
import emailjs from 'emailjs-com';
import { Pet } from '../../requests';
import SweetAlert from 'react-bootstrap-sweetalert';
import 'sweetalert/dist/sweetalert.css';


export default function ContactForm( {pet, onSubmit}) {
    const [alert, setAlert] = useState(false);

    function showAlert() {
        setAlert(true);
        return (<SweetAlert show={alert} title='Demo' text='Alert in React' onConfirm={() => closeAlert()}/>)
    };

    function closeAlert() {
        setAlert(false);
    };

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
                showAlert();
                // alert('email has been sent');
            })
    }

    return(
        <div>
            <div>
                <form className='contact-form-container' onSubmit={sendEmail}>
                    <div> <h1>Send email to the pet owner</h1> </div>
                    <div className='contact-form'> <input type='text' placeholder='Your Name' name='name' autoComplete='off'/> </div>
                    <div className='email-hidden'> <input type='email' name='email' value={pet.author.email}></input></div>
                    <div className='email-hidden'> <input type='text' name='authorname' value={pet.author.full_name}></input></div>
                    <div className='contact-form'> <input type='email' placeholder='Your email address' name='useremail' autoComplete='off'/>  </div>
                    <div className='contact-form'> <input type='text' placeholder='Your message' name='message' autoComplete='off'/> </div>
                    <div className='contact-form'> <input type='submit' value='Send Message'/> </div>
                </form>
            </div>
        </div>
    )
}
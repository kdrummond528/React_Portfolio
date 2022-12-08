import React from 'react';
import { FaMobileAlt } from 'react-icons/fa';
import { TfiEmail } from 'react-icons/tfi';
import { SiWhatsapp } from 'react-icons/si';

const Contact = () => {
    const [formStatus, setFormStatus] = React.useState('Send')
    const onSubmit = (e) => {
        e.preventDefault()
        setFormStatus('Sending...')
        const { name, email, message } = e.target.elements
        let inputValues = {
            name: name.value,
            email: email.value,
            message: message.value,
        }
        console.log(inputValues)
    }

    return (

        <div>
            {/* page title */}
            <h2 className='contactpgtitle'>Contact</h2>

            <div className='directcontactinfo'>
                {/* phone number */}
                <a className='phoneicon' href="tel:+14072719542" title="Call or text me!">
                    <FaMobileAlt className='icon' size={'2rem'} /></a>
                {/* email */}
                <a className='emailicon' href="mailto: k.drummond528@gmail.com" title='Send me an email!'>
                    <TfiEmail className='icon' size={'2rem'} />
                </a>
                {/* whatsapp */}
                <a className='whatsappicon' href="https://api.whatsapp.com/send?1=pt_BR&phone=+14072719542" title='WhatsApp Me!'>
                    <SiWhatsapp className='icon' size={'2.2rem'} />
                </a>
                {/* <p className='directcontactinfo-p'>Contact me directly.</p> */}
            </div>

            {/* contact form */}
            <form className='contactform' onSubmit={onSubmit}>
                {/* name input */}
                <div>
                    <label className='contactinputtitle' htmlFor="name">Name</label>
                    <input className='nameinput' type="text" id="name" required />
                </div>
                {/* email input */}
                <div>
                    <label className='contactinputtitle' htmlFor="email">Email</label>
                    <input className='emailinput' type="email" id="email" required />
                </div>
                {/* message input */}
                <div>
                    <label className='contactinputtitle' htmlFor="message">Message</label>
                    <textarea className='messageinput' id="message" required />
                </div>
                {/* submit button */}
                <button className='contactform-submit-btn' type="submit">
                    {formStatus}
                </button>

            </form>

        </div >

    );
}

export default Contact;
import React from 'react';
import { useState, useEffect } from 'react';
// import { formValues, isSubmit } from 'react-hooks';
import { FaMobileAlt } from 'react-icons/fa';
import { TfiEmail } from 'react-icons/tfi';
import { SiWhatsapp } from 'react-icons/si';

const Contact = () => {
    const initialValues = { name: "", email: "", message: "" };
    const [formValues, setFormValues] = useState(initialValues);
    const [formErrors, setFormErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value })
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setFormErrors(validate(formValues));
        setIsSubmit(true);
    };

    useEffect(() => {
        console.log(formErrors);
        if (Object.keys(formErrors).length === 0 && isSubmit) {
            console.log(formValues);
        }
    }, [formErrors]);

    const validate = (values) => {
        const errors = {};
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
        if (!values.name) {
            errors.name = "Name is required."
        }
        if (!values.email) {
            errors.email = "Email is required."
        } else if (!regex.test(values.email)) {
            errors.email = "Enter a valid email.";
        }
        if (!values.message) {
            errors.message = "Message is required."
        }
        return errors;
    };

    return (

        < div >
            {Object.keys(formErrors).length === 0 && isSubmit ? (
                <div className='MsgSuccess'>Message sent successfully!</div>
            ) : (
                <pre>{JSON.stringify(formValues, undefined, 2)}</pre>
            )};

            <h2 className='contactpgtitle'>Contact</h2>
            <form className='contactform' onSubmit={handleSubmit}>

                {/* name input */}
                <div>
                    <label className='contactinputtitle'>Name:</label>
                    <input type="text" className='nameinput' placeholder='John Doe'
                        value={formValues.name} onChange={handleChange} />
                </div>
                {/* name error message */}
                <p className='errormsg'>{formErrors.name}</p>

                {/* email input */}
                <div>
                    <label className='contactinputtitle'>Email address:</label>
                    <input type="text" className='emailinput' placeholder='johndoe@gmail.com'
                        value={formValues.email} onChange={handleChange} />
                </div>
                {/* email error message */}
                <p className='errormsg'>{formErrors.email}</p>

                {/* message input */}
                <div>
                    <label className='contactinputtitle'>Message:</label>
                    <input type="text" className='messageinput' placeholder='Hello...'
                        value={formValues.message} onChange={handleChange} />
                </div>
                {/* message error message */}
                <p className='errormsg'>{formErrors.message}</p>

                {/* submit button */}
                <div>
                    <button className='contactform-submit-btn'>Submit</button>
                </div>
            </form>

            < section className='contactmeinfo' >
                <p className='contactme-p'>Feel free to contact me directly!</p>
                {/* phone number */}
                <a className='phoneicon' href="tel:+14072719542" title="Call or text me!">
                    <FaMobileAlt size={'2rem'} /></a>
                {/* email */}
                <a className='emailicon' href="mailto: k.drummond528@gmail.com" title='Send me an email!'>
                    <TfiEmail size={'2rem'} />
                </a>
                {/* whatsapp */}
                <a className='whatsappicon' href="https://api.whatsapp.com/send?1=pt_BR&phone=+14072719542" title='WhatsApp Me!'>
                    <SiWhatsapp size={'2.2rem'} />
                </a>
            </section >

        </div >

    );
};

export default Contact;
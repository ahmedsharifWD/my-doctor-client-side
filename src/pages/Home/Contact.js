import React from 'react';
import bg from '../../assets/images/appointment.png'
import PrimaryButton from '../Shared/PrimaryButton'

const Contact = () => {
    return (

        <div style={{
            background: `url(${bg})`
        }} className='px-10 py-14 '>
            <div className='text-center pb-12'>
                <h4 className='text-primary text-xl font-semibold'>Contact us</h4>
                <p className='text-white text-3xl'>Stay Connected With Us</p>
            </div>
            <div className='grid grid-cols-1 justify-items-center gap-5'>
                <input
                    className='input w-full max-w-md'
                    type="text"
                    name="email"
                    placeholder='Email Address' />
                <input
                    className='input w-full max-w-md'
                    type="text"
                    name="subject"
                    placeholder='Subject' />
                <textarea
                    className='w-full max-w-md textarea'
                    name="text"
                    placeholder='Your Message'
                    rows="6"></textarea>
                <PrimaryButton>submit</PrimaryButton>
            </div>
        </div>
    );
};

export default Contact;
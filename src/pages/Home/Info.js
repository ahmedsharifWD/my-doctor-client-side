import React from 'react';
import InfoCart from './InfoCart';
import clock from '../../assets/icons/clock.svg'
import marker from '../../assets/icons/marker.svg'
import phone from '../../assets/icons/phone.svg'

const Info = () => {
    return (
        <div className='grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-5 px-12'>
            <InfoCart cartTitle='Opening Hour' bgColor='bg-gradient-to-r from-secondary to-primary' img={clock} />
            <InfoCart cartTitle='Visit Our Location' bgColor='bg-accent' img={marker} />
            <InfoCart cartTitle='Contact Us' bgColor='bg-gradient-to-r from-secondary to-primary' img={phone} />
        </div>
    );
};

export default Info;
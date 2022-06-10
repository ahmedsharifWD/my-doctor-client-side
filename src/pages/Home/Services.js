import React from 'react';
import icon1 from '../../assets/images/fluoride.png'
import icon2 from '../../assets/images/cavity.png'
import icon3 from '../../assets/images/whitening.png'
import Service from './Service';

const Services = () => {

    const services = [
        {
            _id: 1,
            name: "Fluoride Treatment",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, ratione.",
            img: icon1
        },
        {
            _id: 2,
            name: "Cavity Filling",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, ratione.",
            img: icon2
        },
        {
            _id: 3,
            name: "Teeth Whitening",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, ratione.",
            img: icon3
        },
    ]

    return (
        <div className='my-28'>
            <div className='text-center'>
                <h1 className='uppercase text-xl font-bold text-primary'>our Services</h1>
                <h2 className='text-3xl'>Service We Provide</h2>
            </div>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    services.map(service => <Service
                        key={service._id}
                        service={service}
                    ></Service>)
                }
            </div>
        </div>
    );
};

export default Services;
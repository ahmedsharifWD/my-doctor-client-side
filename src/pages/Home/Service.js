import React from 'react';

const Service = ({ service }) => {
    return (
        <div className="card lg:w-lg bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={service.img} alt="Shoes" className="rounded-xl w-28 h-28" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{service.name}</h2>
                <p>{service.description}</p>
            </div>
        </div>
    );
};

export default Service;
import React from 'react';
import quote from '../../assets/icons/quote.svg'
import people1 from '../../assets/images/people1.png'
import people2 from '../../assets/images/people2.png'
import people3 from '../../assets/images/people3.png'
import Review from './Review';

const Testimonials = () => {

    const reviews = [
        {
            _id: 1,
            name: "Winson Herry",
            review: '',
            location: "California",
            img: people1
        },
        {
            _id: 2,
            name: "Winson Herry",
            review: '',
            location: "California",
            img: people2
        },
        {
            _id: 3,
            name: "Winson Herry",
            review: '',
            location: "California",
            img: people3
        }
    ];

    return (
        <section className='my-24'>
            <div className='flex justify-between'>
                <div>
                    <h4 className='text-primary font-bold text-xl'>Testimonial</h4>
                    <h1 className='text-4xl'>What Our Patient Says</h1>
                </div>
                <div>
                    <img className='w-24 lg:w-48' src={quote} alt="" />
                </div>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    reviews.map(review => <Review
                        key={review._id}
                        review={review}
                    ></Review>)
                }
            </div>
        </section>
    );
};

export default Testimonials;
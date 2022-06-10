import React from 'react';
import treatment from '../../assets/images/treatment.png'
import PrimaryButton from '../Shared/PrimaryButton';

const WorkExp = () => {
    return (
        <div className='grid sm:grid-cols-1 lg:grid-cols-2 md:grid-cols-2 items-center lg:px-48'>
            <div>
                <img className='w-96 mb-5' src={treatment} alt="" />
            </div>
            <div className='md:pl-7'>
                <h1 className='text-5xl font-bold mb-3'>Exceptional Dental Care, on Your Terms</h1>
                <p className='mb-3'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                <PrimaryButton>get started</PrimaryButton>
            </div>
        </div>
    );
};

export default WorkExp;
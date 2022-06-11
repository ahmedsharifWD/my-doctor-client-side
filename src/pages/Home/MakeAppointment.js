import React from 'react';
import doctor from '../../assets/images/doctor.png'
import appointment from '../../assets/images/appointment.png'
import PrimaryButton from '../Shared/PrimaryButton';

const MakeAppointment = () => {
    return (
        <section style={{
            background: `url(${appointment})`
        }} className='flex justify-center items-center mt-24 sm:p-4'>
            <div className='flex-1 hidden lg:block'>
                <img className='mt-[-140px]' src={doctor} alt="" />
            </div>
            <div className='flex-1 p-5'>
                <h3 className='text-xl text-primary font-bold mb-3'>Appointment</h3>
                <h2 className='text-4xl text-white mb-3'>Make an Appointment Today</h2>
                <p className='text-white mb-3'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Similique veniam magni consectetur natus consequatur maxime fugit labore! Temporibus animi deserunt illo quidem sed, eius corporis facilis aliquam pariatur quod dignissimos a similique consectetur veritatis incidunt modi explicabo eos esse. Maxime nisi adipisci atque. Cupiditate sapiente rerum ut excepturi! Magnam, doloremque?</p>
                <PrimaryButton>get started</PrimaryButton>
            </div>
        </section>
    );
};

export default MakeAppointment;
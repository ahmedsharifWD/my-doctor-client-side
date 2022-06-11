import React from 'react';
import Banner from './Banner';
import Contact from './Contact';
import Footer from './Footer';
import Info from './Info';
import MakeAppointment from './MakeAppointment';
import Services from './Services';
import Testimonials from './Testimonials';
import WorkExp from './WorkExp';

const Home = () => {
    return (
        <div className='px-10'>
            <Banner />
            <Info />
            <Services />
            <WorkExp />
            <MakeAppointment />
            <Testimonials />
            <Contact />
            <Footer />
        </div>
    );
};

export default Home;
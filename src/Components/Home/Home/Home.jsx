import React from 'react';
import Banner from '../Banner/Banner';
import PopularClass from '../PopularClass/PopularClass';
import PopularInstructor from '../PopularInstructor/PopularInstructor';
import { Helmet } from 'react-helmet-async';
import AboutUs from '../../AboutUs/AboutUs';
import ContactUs from '../../ContactUs/ContactUs';

const Home = () => {
    return (
        <div className='bg-cyan-400'>
            <Helmet>
                <title>La Masia || Home</title>
            </Helmet>
            <Banner></Banner>
            <PopularClass></PopularClass>
            <PopularInstructor></PopularInstructor>
            <AboutUs></AboutUs>
            <ContactUs></ContactUs>
        </div>
    );
};

export default Home;
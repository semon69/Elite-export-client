import React, { useState } from 'react';
import Banner from '../Banner/Banner';
import PopularClass from '../PopularClass/PopularClass';
import PopularInstructor from '../PopularInstructor/PopularInstructor';
import { Helmet } from 'react-helmet-async';
import AboutUs from '../../AboutUs/AboutUs';
import ContactUs from '../../ContactUs/ContactUs';
import { MdLightMode, MdNightlight } from 'react-icons/md';
import TopStudents from '../TopStudents/TopStudents';
import Testimonials from '../Testimonials/Testimonials';
import Facilities from '../Facilities/Facilities';


const Home = () => {
    return (
        <div>
            <Helmet>
                <title>La Masia || Home</title>
            </Helmet>
            <Banner></Banner>
            <PopularClass></PopularClass>
            <PopularInstructor></PopularInstructor>
            <TopStudents></TopStudents>
            <Facilities></Facilities>
            <AboutUs></AboutUs>
            <Testimonials></Testimonials>
            <ContactUs></ContactUs>
        </div>
    );
};

export default Home;
import React, { useState } from 'react';
import Banner from '../Banner/Banner';
import PopularClass from '../PopularClass/PopularClass';
import PopularInstructor from '../PopularInstructor/PopularInstructor';
import { Helmet } from 'react-helmet-async';
import AboutUs from '../../AboutUs/AboutUs';
import ContactUs from '../../ContactUs/ContactUs';
import TopStudents from '../TopStudents/TopStudents';
import Testimonials from '../Testimonials/Testimonials';
import Facilities from '../Facilities/Facilities';
import Events from '../Events/Events';


const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Elite Explore || Home </title>
            </Helmet>
            <Banner></Banner>
            <PopularClass></PopularClass>
            <PopularInstructor></PopularInstructor>
            <TopStudents></TopStudents>
            <Facilities></Facilities>
            <Events></Events>
            <AboutUs></AboutUs>
            <Testimonials></Testimonials>
            <ContactUs></ContactUs>
        </div>
    );
};

export default Home;
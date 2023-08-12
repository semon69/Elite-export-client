import React, { useState } from 'react';
import Banner from '../Banner/Banner';
import PopularClass from '../PopularClass/PopularClass';
import PopularInstructor from '../PopularInstructor/PopularInstructor';
import { Helmet } from 'react-helmet-async';
import AboutUs from '../../AboutUs/AboutUs';
import ContactUs from '../../ContactUs/ContactUs';
import { MdLightMode, MdNightlight } from 'react-icons/md';
import TopStudents from '../TopStudents/TopStudents';


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
            <AboutUs></AboutUs>
            <ContactUs></ContactUs>
        </div>
    );
};

export default Home;
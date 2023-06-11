import React, { useState } from 'react';
import Banner from '../Banner/Banner';
import PopularClass from '../PopularClass/PopularClass';
import PopularInstructor from '../PopularInstructor/PopularInstructor';
import { Helmet } from 'react-helmet-async';
import AboutUs from '../../AboutUs/AboutUs';
import ContactUs from '../../ContactUs/ContactUs';
import { MdLightMode, MdNightlight } from 'react-icons/md';


const Home = () => {
    const [isDark, setIsDark] = useState(false)
    const handleToggle = () => {
        setIsDark(!isDark)
    }
    return (
        <div className={`${isDark ? 'bg-black text-white': 'bg-cyan-400'}`}>
            <Helmet>
                <title>La Masia || Home</title>
            </Helmet>
            <div className='relative flex justify-end'>
                <button onClick={handleToggle} className='w-18 my-1 border p-2 mr-2 absolute top-0'>{isDark ? <MdLightMode />  : <MdNightlight />}</button>
            </div>
            <Banner></Banner>
            <PopularClass></PopularClass>
            <PopularInstructor></PopularInstructor>
            <AboutUs></AboutUs>
            <ContactUs></ContactUs>
        </div>
    );
};

export default Home;
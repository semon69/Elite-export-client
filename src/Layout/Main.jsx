import React, { useState } from 'react';
import Navbar from '../Components/Shared/Navbar/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../Components/Shared/Footer/Footer';

const Main = () => {
    const [isDark, setIsDark] = useState(false)
    const handleToggle = () => {
        setIsDark(!isDark)
    }
    return (
        <div  className={`${isDark ? 'bg-black text-white' : 'bg-slate-100'}`}>
            <Navbar isDark={isDark} handleToggle={handleToggle}></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;
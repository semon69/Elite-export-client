import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const SingleInstructor = ({ singleInstructor }) => {
    const { image, name, email } = singleInstructor;
    useEffect(() => {
        AOS.init();
    }, []);
    return (
        <div data-aos="zoom-in">
            <div className='border-2 p-2 my-8 h-[500px] bg-slate-500 rounded'>
                <img className='w-full h-[400px] rounded hover:scale-105' src={image} alt="" />
                <div className='text-center text-white font-semibold mt-5'>
                    <p className='font-bold text-2xl'>{name}</p>
                    <p className='font-bold'>{email}</p>
                </div>
            </div>
        </div>
    );
};

export default SingleInstructor;
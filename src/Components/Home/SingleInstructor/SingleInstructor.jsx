import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const SingleInstructor = ({ singleInstructor }) => {
    const { image, name, email } = singleInstructor;
    console.log(singleInstructor);
    useEffect(() => {
        AOS.init();
    }, []);
    return (
        <div data-aos="zoom-in">
            <div className='border-2 p-2 shadow-2xl my-8 h-[500px] rounded'>
                <img className='w-full h-[350px] rounded-full hover:scale-105' src={image} alt="" />
                <div className='text-center  font-semibold mt-5'>
                    <p className='font-bold'>Name: Mrs.  <span className='text-green-500 text-2xl'>{name}</span></p>
                    <p className='font-bold'>Contact:  <span className='text-green-500 text-2xl'>{email}</span></p>
                </div>
            </div>
        </div>
    );
};

export default SingleInstructor;
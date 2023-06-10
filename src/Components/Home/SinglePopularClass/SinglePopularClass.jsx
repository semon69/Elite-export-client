import React from 'react';
import { Fade } from 'react-awesome-reveal';

const SinglePopularClass = ({ singleClass }) => {
    const { image, name, enrolStudent } = singleClass
    return (
        <Fade>
            <div className='border border-black p-2 rounded bg-slate-500'>
                <img className='w-full h-[400px] rounded' src={image} alt="" />
                <div className='flex justify-between items-center my-4 text-white font-semibold'>
                    <p className='text-xl font-bold'>{name}</p>
                    <p className='font-bold'>Enroll Student: {enrolStudent}</p>
                </div>
            </div>
        </Fade>
    );
};

export default SinglePopularClass;
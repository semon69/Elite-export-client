import React from 'react';

const SingleInstructor = ({ singleInstructor }) => {
    const { image, name, email } = singleInstructor;
    return (
        <div>
            <div className='border-2 p-2 my-8 h-[500px] bg-slate-300 rounded'>
                <img className='w-full h-[400px] rounded hover:scale-105' src={image} alt="" />
                <div className='text-center mt-5'>
                    <p className='font-bold text-2xl text-indigo-500'>{name}</p>
                    <p className='font-bold'>{email}</p>
                </div>
            </div>
        </div>
    );
};

export default SingleInstructor;
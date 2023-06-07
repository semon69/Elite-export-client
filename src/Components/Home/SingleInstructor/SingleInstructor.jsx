import React from 'react';

const SingleInstructor = ({singleInstructor}) => {
    const {image, name, email} = singleInstructor;
    return (
        <div>
            <div className='border-2 p-4 my-8 h-[500px]'>
                <img className='w-full h-[400px]' src={image} alt="" />
                <p>{name}</p>
                <p>{email}</p>
            </div>
        </div>
    );
};

export default SingleInstructor;
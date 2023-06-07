import React from 'react';

const SingleClass = ({cls}) => {
    const {image, name, availableSeats, instructorName, price} = cls
    return (
        <div>
            <div className='border-2 p-4 h-[450px] my-8'>
                <p>{name}</p>
                <img className='w-full h-[250px]' src={image} alt="" />
                    <p>Instructor: {instructorName}</p>
                <div>
                    <p>Available Seat: {availableSeats}</p>
                    <p>Price: ${price}</p>
                </div>
                <button className='btn btn-primary'>Select</button>
            </div>
        </div>
    );
};

export default SingleClass;
import React, { useEffect } from 'react';
import SingleInstructor from '../SingleInstructor/SingleInstructor';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

const PopularInstructor = () => {
    const { data: instructor = [] } = useQuery({
        queryKey: ['instructor'],
        queryFn: async () => {
            const res = await axios('https://sports-acedemy-server.vercel.app/instructor')
            return res.data
        }
    })
    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    }, []);
    return (
        <div className='max-w-7xl mx-auto'>
            <div className='text-center  mb-10'>
                <span
                    className='text-4xl  font-bold mb-6 text-green-500 border-b-4 border-green-500 pb-3'
                >Meet Our Instructor</span>
            </div>
            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-10'>
                {
                    instructor.map(singleInstructor => <SingleInstructor key={singleInstructor._id} singleInstructor={singleInstructor}></SingleInstructor>)
                }
            </div>
        </div>
    );
};

export default PopularInstructor;
import React from 'react';
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
    console.log(instructor);
    return (
        <div className='max-w-7xl mx-auto'>
            <h1 className='text-5xl font-bold text-center'>Popular Instructor</h1>
            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-10'>
                {
                    instructor.map(singleInstructor =>  <SingleInstructor key={singleInstructor._id} singleInstructor={singleInstructor}></SingleInstructor>)
                }
            </div>
        </div>
    );
};

export default PopularInstructor;
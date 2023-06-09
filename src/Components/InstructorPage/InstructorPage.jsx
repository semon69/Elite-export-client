import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React from 'react';
import SingleInstructor from '../Home/SingleInstructor/SingleInstructor';

const InstructorPage = () => {
    const { data: instructor = [] } = useQuery({
        queryKey: ['user/instructor'],
        queryFn: async () => {
            const res = await axios('http://localhost:5000/user/instructor')
            return res.data
        }
    })
    return (
        <div>
            <h1 className='text-5xl font-bold text-center'>All Instructors</h1>
            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-10'>
                {
                    instructor.map(singleInstructor => <SingleInstructor key={singleInstructor._id} singleInstructor={singleInstructor}></SingleInstructor>)
                }
            </div>
        </div>
    );
};

export default InstructorPage;
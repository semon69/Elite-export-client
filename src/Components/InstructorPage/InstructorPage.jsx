import { useQuery } from '@tanstack/react-query';
import React, { useEffect } from 'react';
import SingleInstructor from '../Home/SingleInstructor/SingleInstructor';
import useAxiosSecure from '../../Hooks/useAxiosSecure';
import { Helmet } from 'react-helmet-async';

const InstructorPage = () => {
    const [axiosSecure] = useAxiosSecure()
    const { data: instructor = [] } = useQuery({
        queryKey: ['user/instructor'],
        queryFn: async () => {
            const res = await axiosSecure('/user/instructor')
            return res.data
        }
    })
    useEffect(() => {
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      }, []);
    return (
        <div className='py-8'>
            <Helmet>
                <title>Elite Explore || Instructor</title>
            </Helmet>
            <div className=' max-w-7xl mx-auto p-5 pt-24'>
                <div className='grid md:grid-cols-3 lg:grid-cols-4 gap-10'>
                    {
                        instructor.map(singleInstructor => <SingleInstructor key={singleInstructor._id} singleInstructor={singleInstructor}></SingleInstructor>)
                    }
                </div>
            </div>
        </div>
    );
};

export default InstructorPage;
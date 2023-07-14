import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React from 'react';
import SingleClass from '../SingleClass.jsx/SingleClass';
import SinglePopularClass from '../SinglePopularClass/SinglePopularClass';

const PopularClass = () => {
    const { data: popularClass = [], refetch } = useQuery({
        queryKey: ['classes'],
        queryFn: async () => {
            const res = await axios('https://sports-acedemy-server.vercel.app/popularClass')
            return res.data
        }
    })
    console.log(popularClass);
    return (
        <div className='max-w-7xl mx-auto my-8 p-5'>
            <h2 className='text-4xl text-center font-bold mb-6'>Popular Class Section</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
                {
                    popularClass.map(singleClass => <SinglePopularClass key={singleClass._id} singleClass={singleClass}></SinglePopularClass>)
                }
            </div>
        </div>
    );
};

export default PopularClass;
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
            <div className='text-center  mb-14'>
                <span 
                className='text-4xl  font-bold mb-6 text-green-500 border-b-4 border-green-500 pb-3'
                >Popular Class Section</span>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-10'>
                {
                    popularClass.map(singleClass => <SinglePopularClass key={singleClass._id} singleClass={singleClass}></SinglePopularClass>)
                }
            </div>
        </div>
    );
};

export default PopularClass;
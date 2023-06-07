import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React from 'react';
import SingleClass from '../SingleClass.jsx/SingleClass';

const PopularClass = () => {
    const { data: classes = [] } = useQuery({
        queryKey: ['classes'],
        queryFn: async () => {
            const res = await axios('http://localhost:5000/classes')
            return res.data
        }
    })
    console.log(classes);
    return (
        <div className='max-w-7xl mx-auto my-8'>
            <h2>Popular Class Section</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
                {
                    classes.map(cls => <SingleClass key={cls._id} cls={cls}></SingleClass>)
                }
            </div>
        </div>
    );
};

export default PopularClass;
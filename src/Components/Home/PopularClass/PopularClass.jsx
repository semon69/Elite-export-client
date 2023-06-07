import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React from 'react';
import SingleClass from '../SingleClass.jsx/SingleClass';

const PopularClass = () => {
    // const { data: classes = [] } = useQuery({
    //     queryKey: ['classes'],
    //     queryFn: async () => {
    //         const res = await axios('http://localhost:5000/classes')
    //         return res.data
    //     }
    // })
    // console.log(classes);
    return (
        <div className='max-w-7xl mx-auto my-8'>
            <h2>Popular Class Section</h2>
            <div>
                <img src="" alt="" />
            </div>
        </div>
    );
};

export default PopularClass;
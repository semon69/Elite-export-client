import React, { useContext, useEffect } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
import axios from 'axios';
import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';

const MyClass = () => {
    const { user } = useContext(AuthContext)
    const [axiosSecure] = useAxiosSecure()

    // fetch(`http://localhost:5000/myClass?email=${user?.email}`)
    const { data: myClass = [] } = useQuery({
        queryKey: ['myClass', user?.email],
        queryFn: async () => {
            const res = await axiosSecure(`/myClass?email=${user?.email}`)
            return res.data
        }
    })
    console.log(myClass);
    return (
        <div>
            <h1>My classes: {myClass.length}</h1>
        </div>
    );
};

export default MyClass;
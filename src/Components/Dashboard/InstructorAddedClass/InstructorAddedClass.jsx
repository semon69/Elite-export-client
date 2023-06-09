import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React, { useContext } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';

const InstructorAddedClass = () => {
    const {user} =useContext(AuthContext)
    const { data: myClass = [] } = useQuery({
        queryKey: ['myClass', user?.email],
        queryFn: async () => {
            const res = await axios(`http://localhost:5000/instructorClass?instructorEmail=${user?.email}`)
            return res.data
        }
    })
    console.log(myClass);
    return (
        <div>
            <p>{myClass.length}</p>
        </div>
    );
};

export default InstructorAddedClass;
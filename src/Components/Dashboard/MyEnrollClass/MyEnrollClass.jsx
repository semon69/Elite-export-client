
import React, { useContext } from 'react';
import { useQuery } from '@tanstack/react-query';
import { AuthContext } from '../../Provider/AuthProvider';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';

const MyEnrollClass = () => {
    const { user } = useContext(AuthContext)
    const [axiosSecure] = useAxiosSecure()
    const { data: myEnrollClass = [] } = useQuery({
        queryKey: ['myEnrollClass', user?.email],
        queryFn: async () => {
            const res = await axiosSecure(`/myEnrollClass?email=${user?.email}`)
            return res.data
        }
    })
    console.log(myEnrollClass);
    return (
        <div className='border-2 border-black m-5'>
            <h1 className='text-2xl font-bold ms-5 py-3'>My Enrolled class: {myEnrollClass.length}</h1>
            <div className="overflow-x-auto border m-5">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr className='text-black text-lg font-semibold'>
                            <th>#</th>
                            <th>
                                <p>Image</p>
                            </th>
                            <th>Name</th>
                            <th>Instructor Name</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            myEnrollClass.map((singleClass, index) =>
                                <tr key={singleClass._id}>
                                    <th>
                                        {index + 1}
                                    </th>
                                    <td>
                                        <div className="flex items-center space-x-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle w-12 h-12">
                                                    <img src={singleClass.image} alt="Image" />
                                                </div>
                                            </div>

                                        </div>
                                    </td>
                                    <td className='text-black'>{singleClass.name}</td>
                                    <td className='text-black'>{singleClass.instructorName}</td>
                                </tr>
                            )
                        }

                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default MyEnrollClass;
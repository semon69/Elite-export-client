import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';

const InstructorAddedClass = () => {
    const { user } = useContext(AuthContext)
    const [axiosSecure] = useAxiosSecure()
    const { data: myClass = [] } = useQuery({
        queryKey: ['instructorClass', user?.email],
        queryFn: async () => {
            const res = await axiosSecure(`/instructorClass?instructorEmail=${user?.email}`)
            return res.data
        }
    })
    return (
        <div className='border-2 border-black m-5 py-8'>
            <p className='text-2xl font-bold ms-5'>My Added Class{myClass.length}</p>
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
                            <th>Status</th>
                            <th>Enrolled Student</th>
                            <th>Feedback</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            myClass.map((singleClass, index) =>
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
                                    <td>{singleClass.name}</td>
                                    <td>{singleClass.status}</td>
                                    <td>{singleClass.enrolStudent}</td>
                                    <td>{

                                        (singleClass?.status == 'approved' || singleClass?.status == 'pending')
                                            ?
                                            ''
                                            : singleClass?.feedback
                                    }</td>
                                    <td>
                                        <button className="btn bg-orange-500 btn-xs text-white">Update</button>
                                    </td>
                                </tr>
                            )
                        }

                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default InstructorAddedClass;
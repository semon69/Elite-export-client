import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React, { useContext } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';

const InstructorAddedClass = () => {
    const { user } = useContext(AuthContext)
    const { data: myClass = [] } = useQuery({
        queryKey: ['instructorClass', user?.email],
        queryFn: async () => {
            const res = await axios(`http://localhost:5000/instructorClass?instructorEmail=${user?.email}`)
            return res.data
        }
    })
    console.log(myClass);
    return (
        <div>
            <p>{myClass.length}</p>
            <div className="overflow-x-auto border m-5">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
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
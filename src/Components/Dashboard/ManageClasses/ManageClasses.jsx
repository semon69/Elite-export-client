import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React from 'react';

const ManageClasses = () => {
    const { data: classes = [] } = useQuery({
        queryKey: ['classes'],
        queryFn: async () => {
            const res = await axios('http://localhost:5000/classes')
            return res.data
        }
    })
    console.log(classes);
    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th className='flex gap-8'>
                                <p>Image</p>
                                <p>Name</p>
                            </th>
                            <th>Instructor</th>
                            <th>Available Seats</th>
                            <th>Price</th>
                            <th>Status</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            classes.map((singleClass, index) =>
                                <tr key={singleClass._id}>
                                    <th>
                                        {index+1}
                                    </th>
                                    <td>
                                        <div className="flex items-center space-x-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle w-12 h-12">
                                                    <img src={singleClass.image} alt="Image" />
                                                </div>
                                            </div>
                                            <div>
                                                <p>{singleClass.name}</p>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        {singleClass.instructorName}
                                        <br />
                                        <span className="badge badge-ghost badge-sm">{singleClass.instructorEmail}</span>
                                    </td>
                                    <td>{singleClass.availableSeats}</td>
                                    <td>{singleClass.price}</td>
                                    <td>{singleClass.status}</td>
                                    <th className='flex flex-col'>
                                        <button className="btn btn-ghost btn-xs">Approve</button>
                                        <button className="btn btn-ghost btn-xs">Deny</button>
                                        <button className="btn btn-ghost btn-xs">Feedback</button>
                                    </th>
                                </tr>
                            )
                        }

                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default ManageClasses;
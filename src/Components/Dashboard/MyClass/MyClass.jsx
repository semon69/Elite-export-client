import React, { useContext, useEffect } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
import axios from 'axios';
import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const MyClass = () => {
    const { user } = useContext(AuthContext)
    const [axiosSecure] = useAxiosSecure()

    // fetch(`http://localhost:5000/myClass?email=${user?.email}`)
    const { data: myClass = [], refetch } = useQuery({
        queryKey: ['myClass', user?.email],
        queryFn: async () => {
            const res = await axiosSecure(`/myClass?email=${user?.email}`)
            return res.data
        }
    })
    console.log(myClass);
    const total = myClass.reduce((sum, item) => item.price + sum, 0)

    const handleDelete = id => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/myClass/${id}`,{
                    method:'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        refetch()
                        if (data.deletedCount) {
                            Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                            )
                        }
                    })

            }
        })

    }

    return (
        <div className='max-w-7xl mx-auto my-12'>
            <div className='flex justify-evenly'>
                <p>Total class: {myClass.length}</p>
                <p>Total Price: {total}</p>
                <button className="btn bg-orange-500 btn-xs text-white"><Link to='/dashboard/payment'>Pay</Link> </button>
            </div>
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
                            <th>Available Seats</th>
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
                                    <td>{singleClass.availableSeats}</td>
                                    <th className='flex flex-col gap-4'>
                                        <button onClick={() => handleDelete(singleClass._id)} className="btn bg-red-500 btn-xs text-white">Delete</button>
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

export default MyClass;
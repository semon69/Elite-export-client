import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { FaTrashAlt, FaUserAlt } from 'react-icons/fa';
import Swal from 'sweetalert2';
import axios from 'axios';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';

const AllUsers = () => {
    const [axiosSecure] = useAxiosSecure()

    const { data: users = [], refetch } = useQuery(['users'], async () => {
        const res = await axiosSecure('/users');
        return res.data
    })

    const handleMakeAdmin = user => {
        fetch(`https://sports-acedemy-server.vercel.app/users/admin/${user._id}`, {
            method: 'PATCH'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    refetch()
                    Swal.fire(
                        'Good job!',
                        `${user.name} is admin now`,
                        'success'
                    )
                }
            })

    }

    const handleMakeInstructor = user => {
        fetch(`https://sports-acedemy-server.vercel.app/users/instructor/${user._id}`, {
            method: 'PATCH'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    refetch()
                    Swal.fire(
                        'Good job!',
                        `${user.name} is instructor now`,
                        'success'
                    )
                }
            })
    }

    return (
        <div className=''>
            <h2 className='uppercase text-3xl my-4 text-center'>Total User: {users.length}</h2>
            <div>
                <div className=" overflow-x-auto overflow-y-auto m-8 border-2">
                    <table className="table w-full">
                        <thead>
                            <tr className=' text-green-500 text-lg font-semibold'>
                                <th>#</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Role</th>
                                <th>Action 1</th>
                                <th>Action 2</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                users.map((user, index) =>
                                    <tr key={user._id}>
                                        <th>{index + 1}</th>
                                        <td className='font-semibold'>{user.name}</td>
                                        <td className='font-semibold'>{user.email}</td>
                                        <td  className='font-semibold'>{user?.role === 'admin' ? 'admin' : 'student' && user?.role === 'instructor' ? 'instructor' : 'student'}</td>
                                        <td> {
                                            <button disabled={user?.role == 'admin'} onClick={() => handleMakeAdmin(user)} className="btn bg-green-500 btn-xs text-white">Make Admin</button>
                                        } </td>
                                        <td><button disabled={user?.role == 'instructor'} onClick={() => handleMakeInstructor(user)} className="btn btn-xs">Make Instructor</button></td>
                                    </tr>)
                            }

                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default AllUsers;
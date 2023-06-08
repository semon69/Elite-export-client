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

    const handleMakeId = user => {
        fetch(`http://localhost:5000/users/admin/${user._id}`, {
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
        fetch(`http://localhost:5000/users/instructor/${user._id}`, {
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
        <div className='max-h-screen'>
            <h2 className='uppercase text-3xl my-4'>Total User: {users.length}</h2>
            <div>
                <div className="overflow-x-auto">
                    <table className="table w-full">
                        <thead>
                            <tr>
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
                                        <td>{user.name}</td>
                                        <td>{user.email}</td>
                                        <td>{user?.role === 'admin' ? 'admin' : 'student' && user?.role === 'instructor' ? 'instructor' : 'student'}</td>
                                        <td> {
                                            <button onClick={() => handleMakeId(user)} className="btn bg-orange-500 btn-xs">Make Admin</button>
                                        } </td>
                                        <td><button onClick={() => handleMakeInstructor(user)} className="btn btn-xs">Make Instructor</button></td>
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
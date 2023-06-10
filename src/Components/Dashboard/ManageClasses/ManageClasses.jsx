import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React, { useRef, useState } from 'react';

const ManageClasses = () => {
    const [inputValue, setInputValue] = useState('');
    const { data: classes = [], refetch } = useQuery({
        queryKey: ['classes'],
        queryFn: async () => {
            const res = await axios('https://sports-acedemy-server.vercel.app/classes')
            return res.data
        }
    })
    const handleApproveAndDenied = (id, status) => {
        console.log(id);
        fetch(`https://sports-acedemy-server.vercel.app/classes/${id}`, {
            method: 'PATCH',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({ status: status })
        })
            .then(res => res.json())
            .then(data => {
                refetch()
                console.log(data);
            })
    }

    // const feedbackRef = useRef()

    const handleInputChange = event => {
        event.preventDefault()
        setInputValue(event.target.value);
    }

    const handleFeedback = (id) => {
        console.log(inputValue, id);
        const feedback = inputValue
        fetch(`https://sports-acedemy-server.vercel.app/classes/feedback/${id}`, {
            method: 'PATCH',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({ feedback: feedback })
        })
            .then(res => res.json())
            .then(data => {
                refetch()
                console.log(data);
            })
    }
    return (
        <div>
            <div className="overflow-x-auto overflow-y-auto m-8 border-2">
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
                                        {index + 1}
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
                                        <span className='text-xl font-bold'>{singleClass.instructorName}</span>
                                        <br />
                                        <span className="badge badge-ghost badge-sm">{singleClass.instructorEmail}</span>
                                    </td>
                                    <td>{singleClass.availableSeats}</td>
                                    <td>{singleClass.price}</td>
                                    <td>{singleClass.status}</td>
                                    <th className='flex flex-col gap-4'>
                                        <button
                                            disabled={singleClass?.status == 'approved' || singleClass?.status == 'denied'}
                                            onClick={() => handleApproveAndDenied(singleClass._id, 'approved')}
                                            className="btn bg-green-500 btn-xs text-white">
                                            Approve
                                        </button>
                                        <button
                                            disabled={singleClass?.status == 'approved' || singleClass?.status == 'denied'}
                                            onClick={() => handleApproveAndDenied(singleClass._id, 'denied')}
                                            className="btn bg-red-500 btn-xs text-white">
                                            Deny
                                        </button>
                                        {/* The button to open modal */}
                                        <label htmlFor="my_modal_6" className="btn btn-xs">Feedback</label>

                                        {/* Put this part before </body> tag */}
                                        <input type="checkbox" id="my_modal_6" className="modal-toggle" />
                                        <div className="modal">
                                            <div className="modal-box">
                                                <input type="text" value={inputValue} onChange={handleInputChange} placeholder="Give Feedback" className="input input-bordered w-full max-w-xs" />
                                                <label onClick={() => handleFeedback(singleClass._id)} className="btn">Send</label>
                                                <div className="modal-action">

                                                    <label htmlFor="my_modal_6" className="btn">Close!</label>
                                                </div>
                                            </div>
                                        </div>
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
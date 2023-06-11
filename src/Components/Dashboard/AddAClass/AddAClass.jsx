import React, { useContext } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';

const AddAClass = () => {
    const { user } = useContext(AuthContext)

    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => {
        const newClass = {
            name: data.className,
            image: data.image,
            instructorName: data.name,
            instructorEmail: data.email,
            availableSeats: parseFloat(data.seats),
            price: parseFloat(data.price),
            status: 'pending',
            enrolStudent: 0
        }

        fetch('https://sports-acedemy-server.vercel.app/classes', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(newClass)
        })
            .then(res => res.json())
            .then(data => {
                if(data.insertedId){
                    Swal.fire('A class added')
                }
            })
    }

    return (
        <div>
            <div className=" min-h-screen">
                <div className="p-10">
                    <form onSubmit={handleSubmit(onSubmit)} className=" w-full shadow-2xl bg-base-100 p-4 rounded">
                        <div className='flex gap-10'>
                            <div className="form-control w-1/2">
                                <label className="label">
                                    <span className="label-text">Class Name</span>
                                </label>
                                <input type="text" {...register("className", { required: true })} placeholder="name" className="input input-bordered" />
                            </div>
                            <div className="form-control w-1/2">
                                <label className="label">
                                    <span className="label-text">Class Image</span>
                                </label>
                                <input type="text" {...register("image", { required: true })} placeholder="Image URL" className="input input-bordered" />

                            </div>

                        </div>
                        <div className='flex gap-10'>
                            <div className="form-control w-1/2">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" {...register("name", { required: true })} placeholder="Name" defaultValue={user?.displayName} className="input input-bordered" readOnly />
                            </div>
                            <div className="form-control w-1/2">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" {...register("email", { required: true })} placeholder="Email" defaultValue={user?.email} className="input input-bordered" readOnly />

                            </div>

                        </div>
                        <div className='flex gap-10'>
                            <div className="form-control w-1/2">
                                <label className="label">
                                    <span className="label-text">Available Seats</span>
                                </label>
                                <input type="text" {...register("seats", { required: true })} placeholder="Available Seats" className="input input-bordered" />
                            </div>
                            <div className="form-control w-1/2">
                                <label className="label">
                                    <span className="label-text">Price</span>
                                </label>
                                <input type="text" {...register("price", { required: true })} placeholder="Price" className="input input-bordered" />

                            </div>

                        </div>
                        <div className="form-control mt-6">
                            <input className="btn bg-gradient-to-r from-red-600 to-indigo-700 text-white" type="submit" value="Add" />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddAClass;
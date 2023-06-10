import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';
import SocialLogin from '../Shared/SocialLogin/SocialLogin';

const Registration = () => {
    const { register, handleSubmit, reset, formState: { errors }, getValues } = useForm();
    const { createUser, profileUpdate } = useContext(AuthContext);
    const navigate = useNavigate();
    const onSubmit = data => {
        console.log(data)
        createUser(data.email, data.password)
            .then(result => {

                const loggedUser = result.user;
                console.log(loggedUser);

                profileUpdate(data.name, data.photoURL)
                    .then(() => {
                        const user = { name: data.name, email: loggedUser.email, image: data.photoURL }
                        fetch('https://sports-acedemy-server.vercel.app/users', {
                            method: 'POST',
                            headers: { 'content-type': 'application/json' },
                            body: JSON.stringify(user)
                        })
                            .then(data => {
                                console.log(data);
                                navigate('/')
                            })
                            .then(err => console.log(err))
                    })
                    .catch(error => console.log(error))
            })
    }
    return (
        <div>
            <div className="hero min-h-screen bg-gradient-to-r from-indigo-600 to-fuchsia-800">
                <div className="hero-content flex-col lg:flex-row gap-16">
                    <div className="text-center lg:text-left w-1/2">
                        <img className='rounded' src="https://i.ibb.co/rtcgVch/undraw-Mobile-login-re-9ntv.png" alt="" />
                    </div>
                    <div className="card flex-shrink-0 w-1/2 max-w-sm shadow-2xl bg-base-100 p-4">
                        <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text"  {...register("name", { required: true })} name="name" placeholder="Name" className="input input-bordered" />
                                {errors.name && <span className="text-red-600">Name is required</span>}
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email"  {...register("email", { required: true })} name="email" placeholder="email" className="input input-bordered" />
                                {errors.email && <span className="text-red-600">Email is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password"
                                    {...register("password", {
                                        required: true,
                                        minLength: 6,
                                        maxLength: 20,
                                        pattern: /(?=.*[A-Z])(?=.*[!@#$&*])/
                                    })} placeholder="password" className="input input-bordered" />
                                {errors.password?.type === 'required' && <p className="text-red-600">Password is required</p>}
                                {errors.password?.type === 'minLength' && <p className="text-red-600">Password must be 6 characters</p>}
                                {errors.password?.type === 'pattern' && <p className="text-red-600">Password must have one Uppercase, one special character.</p>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Confirm Password</span>
                                </label>
                                <input
                                    type='password'
                                    className="input input-bordered"
                                    placeholder='Confirm Password'
                                    {...register("passwordConfirmation", {
                                        required: "Please confirm password!",
                                        validate: {
                                            matchesPreviousPassword: (value) => {
                                                const { password } = getValues();
                                                return password === value || "Passwords should match!";
                                            }
                                        }
                                    })}
                                />
                                {errors.passwordConfirmation && <p className="text-red-600">{errors.passwordConfirmation.message}</p>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo URL</span>
                                </label>
                                <input type="text"  {...register("photoURL", { required: true })} placeholder="Photo URL" className="input input-bordered" />
                                {errors.photoURL && <span className="text-red-600">Photo URL is required</span>}
                            </div>
                            <div className="form-control mt-6">
                                <input className="btn bg-gradient-to-r from-red-600 to-indigo-700 text-white" type="submit" value="Sign Up" />
                            </div>
                        </form>
                        <SocialLogin></SocialLogin>
                        <p className='mt-4'><small>Already have an account <Link to="/login">Login</Link></small></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Registration;
import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import SocialLogin from '../Shared/SocialLogin/SocialLogin';
import { AuthContext } from '../Provider/AuthProvider';
import { useForm } from 'react-hook-form';
import { FaEye } from 'react-icons/fa';
const Login = () => {
    const { signIn } = useContext(AuthContext)
    const navigate = useNavigate()
    const location = useLocation()
    const from = location?.state?.from?.pathname || '/'
    const [show, setShow] = useState(false)
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => {

        console.log(data.email, data.password)
        signIn(data.email, data.password)
            .then(result => {
                console.log(result.user);
                navigate(from, { replace: true })
            })
            .catch(err => console.log(err))

    };
    const handleShowPassword = () => {
        setShow(!show)
    }
    return (
        <div className=''>
            <div className="hero min-h-screen bg-cyan-400">
                <div className="hero-content flex-col md:flex-row gap-10">
                    <div className="text-center md:w-1/2 lg:text-left">
                        <img src="https://i.ibb.co/g4JgwsS/undraw-Login-re-4vu2.png" alt="" />
                    </div>
                    <div className="card bg-zinc-400 shadow-2xl p-4">
                        <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-bold">Email</span>
                                </label>
                                <input {...register("email", { required: true })} type="email" name="email" placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-bold">Password</span>
                                </label>
                                <div className='flex relative'>
                                    <input {...register("password", { required: true })} type={show ? 'text' : 'password'} name="password" placeholder="password" className="input input-bordered" />
                                    <span onClick={handleShowPassword} className='cursor-pointer absolute right-3 top-3'><FaEye></FaEye></span>
                                </div>
                            </div>
                            <div className="form-control mt-6">
                                <input className="btn bg-gradient-to-r from-red-600 to-indigo-700 text-white" type="submit" value="Login" />
                            </div>
                        </form>
                        <SocialLogin></SocialLogin>
                        <p className='mt-4'><small>New to La Masia? <Link to="/registration">Create an account</Link> </small></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
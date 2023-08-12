import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import useAdmin from '../Hooks/useAdmin';
import useInstructor from '../Hooks/useInstructor';
import { AiFillHome } from 'react-icons/ai';
import { MdPayment } from 'react-icons/md';
import { FcBriefcase } from 'react-icons/fc';
import { FaUserFriends, FaBook } from 'react-icons/fa';
import { SiBookstack } from 'react-icons/si';
import { Helmet } from 'react-helmet-async';
import lottieData from './lottieDashboard.json'
import Lottie from "lottie-react";

const Dashboard = () => {

    const [isAdmin] = useAdmin();
    const [isInstructor] = useInstructor()
    console.log(isAdmin);
    console.log(isInstructor);

    return (
        <div>
            <Helmet>
                <title>La Masia || Dashboard</title>
            </Helmet>
            <div className="drawer lg:drawer-open">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    {/* Page content here */}
                    {
                        isAdmin ?
                            <>
                                <p className='text-4xl text-center font-bold my-4 text-green-500'>Welcome to Admin Dashboard</p>
                                <Lottie className='h-[50vh]' animationData={lottieData} />
                            </>
                            :
                            <>
                                <p className='text-4xl text-center font-bold my-4 text-green-500'>Welcome to Student Dashboard</p>
                                <Lottie className='h-[50vh]' animationData={lottieData} />
                            </>
                                &&

                                isInstructor ?
                                <>
                                    <p className='text-4xl text-center font-bold my-4 text-green-500'>Welcome to Instructor Dashboard</p>
                                    <Lottie className='h-[50vh]' animationData={lottieData} />
                                </>
                                :
                                <>
                                    <p className='text-4xl text-center font-bold my-4 text-green-500'>Welcome to Student Dashboard</p>
                                    <Lottie className='h-[50vh]' animationData={lottieData} />
                                </>
                    }
                    <Outlet></Outlet>
                    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                    <ul className=" p-4 w-80 h-[100vh] bg-black text-white font-bold text-2xl pt-10 space-y-6">
                        {
                            isAdmin ?
                                <>
                                    <li className='text-center'>Admin Dashboard</li>
                                    <div className="divider text-green-600">OR</div>
                                    <li><NavLink className={({ isActive }) => isActive ? "text-yellow-600" : ""} to='/dashboard/manageClasses'>
                                        <div className='flex justify-center items-center'>
                                            <span> <SiBookstack /></span>
                                            <span className='ms-2'>Manage Classes</span>
                                        </div>
                                    </NavLink></li>
                                    <li><NavLink className={({ isActive }) => isActive ? "text-yellow-600" : ""} to='/dashboard/allUsers'>

                                        <div className='flex justify-center items-center'>
                                            <span> <FaUserFriends /></span>
                                            <span className='ms-2'>Manage Users</span>
                                        </div>
                                    </NavLink></li>
                                </>
                                :
                                <>
                                    <li className='text-center'>Student Dashboard</li>
                                    <div className="divider text-green-600">OR</div>
                                    <li><NavLink className={({ isActive }) => isActive ? "text-yellow-600" : ""} to='/dashboard/myClass'>
                                        <div className='flex justify-center items-center'>
                                            <span><SiBookstack /> </span>
                                            <span className='ms-2'>My Selected Classes</span>
                                        </div>
                                    </NavLink></li>
                                    <li><NavLink className={({ isActive }) => isActive ? "text-yellow-600" : ""} to='/dashboard/myEnrollClass'>

                                        <div className='flex justify-center items-center'>
                                            <span> <FcBriefcase /></span>
                                            <span className='ms-2'>My Enrolled Classes</span>
                                        </div>
                                    </NavLink>

                                    </li>
                                    <li><NavLink className={({ isActive }) => isActive ? "text-yellow-600" : ""} to='/dashboard/paymentHistory'>

                                        <div className='flex justify-center items-center'>
                                            <span> <MdPayment /></span>
                                            <span className='ms-2'>Payment History</span>
                                        </div>
                                    </NavLink></li>
                                </>
                                    &&
                                    isInstructor ?
                                    <>
                                        <li className='text-center'>Instructor Dashboard</li>
                                        <div className="divider text-green-600">OR</div>
                                        <li><NavLink className={({ isActive }) => isActive ? "text-yellow-600" : ""} to='/dashboard/addAClass'>

                                            <div className='flex justify-center items-center'>
                                                <span> <FaBook /></span>
                                                <span className='ms-2'>Add A Class</span>
                                            </div>
                                        </NavLink></li>
                                        <li><NavLink className={({ isActive }) => isActive ? "text-yellow-600" : ""} to='/dashboard/instructorClass'>

                                            <div className='flex justify-center items-center'>
                                                <span> <SiBookstack /></span>
                                                <span className='ms-2'>My Class</span>
                                            </div>
                                        </NavLink></li>
                                    </>
                                    :
                                    <>
                                        <li className='text-center'>Student Dashboard</li>
                                        <div className="divider text-green-600">OR</div>
                                        <li><NavLink className={({ isActive }) => isActive ? "text-yellow-600" : ""} to='/dashboard/myClass'>
                                            <div className='flex justify-center items-center'>
                                                <span><SiBookstack></SiBookstack> </span>
                                                <span className='ms-2'>My Selected Classes</span>
                                            </div>
                                        </NavLink></li>
                                        <li><NavLink className={({ isActive }) => isActive ? "text-yellow-600" : ""} to='/dashboard/myEnrollClass'>

                                            <div className='flex justify-center items-center'>
                                                <span> <FcBriefcase /></span>
                                                <span className='ms-2'>My Enrolled Classes</span>
                                            </div>
                                        </NavLink>

                                        </li>
                                        <li><NavLink className={({ isActive }) => isActive ? "text-yellow-600" : ""} to='/dashboard/paymentHistory'>

                                            <div className='flex justify-center items-center'>
                                                <span> <MdPayment /></span>
                                                <span className='ms-2'>Payment History</span>
                                            </div>
                                        </NavLink></li>
                                    </>

                        }
                        <div className="divider text-green-600">OR</div>

                        <li><NavLink to='/'>
                            <div className='flex justify-center items-center'>
                                <span><AiFillHome /></span>
                                <span className='ms-2'>Home</span>
                            </div>
                        </NavLink></li>
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default Dashboard;
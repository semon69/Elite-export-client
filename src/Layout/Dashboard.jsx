import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import useAdmin from '../Hooks/useAdmin';
import useInstructor from '../Hooks/useInstructor';

const Dashboard = () => {

    const [isAdmin] = useAdmin();
    const [isInstructor] = useInstructor()
    console.log(isAdmin);
    console.log(isInstructor);

    return (
        <div>
            <div className="drawer lg:drawer-open">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    {/* Page content here */}
                    <Outlet></Outlet>
                    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

                </div>
                <div className="drawer-side fixed">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                    <ul className=" p-4 w-80 h-full mt-10 bg-gradient-to-r from-indigo-600 to-cyan-700 text-white font-bold text-2xl pt-10 space-y-6">
                        {
                            isAdmin ?
                                <>
                                    <li><NavLink to='/dashboard/manageClasses'>Manage Classes</NavLink></li>
                                    <li><NavLink to='/dashboard/allUsers'>Manage Users</NavLink></li>
                                </>
                                :
                                <>
                                    <li><NavLink to='/dashboard/myClass'>My Selected Classes</NavLink></li>
                                    <li><NavLink to='/dashboard/myEnrollClass'>My Enrolled Classes</NavLink></li>
                                    <li><NavLink to='/dashboard/paymentHistory'>Payment History</NavLink></li>
                                </>
                                    &&
                                    isInstructor ?
                                    <>
                                        <li><NavLink to='/dashboard/addAClass'>Add A Class</NavLink></li>
                                        <li><NavLink to='/dashboard/instructorClass'>My Class</NavLink></li>
                                    </>
                                    :
                                    <>
                                        <li><NavLink to='/dashboard/myClass'>My Selected Classes</NavLink></li>
                                        <li><NavLink to='/dashboard/myEnrollClass'>My Enrolled Classes</NavLink></li>
                                        <li><NavLink to='/dashboard/paymentHistory'>Payment History</NavLink></li>
                                    </>

                        }



                        <li><NavLink to='/'>Home</NavLink></li>
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default Dashboard;
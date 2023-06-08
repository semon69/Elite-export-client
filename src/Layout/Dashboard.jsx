import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import useAdmin from '../Hooks/useAdmin';
import useInstructor from '../Hooks/useInstructor';

const Dashboard = () => {

    const [isAdmin] = useAdmin();
    const [isInstructor] = useInstructor()
    console.log(isInstructor);


    if (isAdmin) {
        <>
            <li><Link to='/dashboard/myClass'>Manage Classes</Link></li>
            <li><Link to='/dashboard/allUsers'>Manage Users</Link></li>
        </>
    }
    else if (isInstructor) {
        <>
            <li><Link to='/dashboard/addAClass'>Add A Class</Link></li>
            <li><Link to='/dashboard/myClass'>My Class</Link></li>
        </>
    }
    else {
        <>
            <li><Link to='/dashboard/myClass'>My Classes</Link></li>
            <li><Link to='/dashboard/myEnrollClass'>My Enrolled Classes</Link></li>
        </>
    }


    return (
        <div>
            <div className="drawer lg:drawer-open">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col items-center justify-center">
                    {/* Page content here */}
                    <Outlet></Outlet>
                    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 h-full bg-base-200 text-base-content">
                        {
                            isAdmin ?
                                <>
                                    <li><Link to='/dashboard/myClass'>Manage Classes</Link></li>
                                    <li><Link to='/dashboard/allUsers'>Manage Users</Link></li>
                                </>
                                :
                                <>
                                    <li><Link to='/dashboard/myClass'>My Classes</Link></li>
                                    <li><Link to='/dashboard/myEnrollClass'>My Enrolled Classes</Link></li>
                                </>
                                    &&
                                    isInstructor ?
                                    <>
                                        <li><Link to='/dashboard/addAClass'>Add A Class</Link></li>
                                        <li><Link to='/dashboard/myClass'>My Class</Link></li>
                                    </>
                                    :
                                    <>
                                        <li><Link to='/dashboard/myClass'>My Classes</Link></li>
                                        <li><Link to='/dashboard/myEnrollClass'>My Enrolled Classes</Link></li>
                                    </>

                        }



                        <li><Link to='/'>Home</Link></li>
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default Dashboard;
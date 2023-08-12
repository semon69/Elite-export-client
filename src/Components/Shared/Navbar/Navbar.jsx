import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';
import { MdDarkMode, MdLightMode, MdNightlight } from 'react-icons/md';

const Navbar = ({ isDark, handleToggle }) => {
    const { user, logOut } = useContext(AuthContext)
    const handleLogout = () => {
        logOut()
            .then(() => { })
            .then(err => console.log(err))
    }

    const navItem =
        <>
            <li><NavLink className={({ isActive }) => isActive ? "text-green-500 border-black" : ""} to='/'>Home</NavLink></li>
            <li><NavLink className={({ isActive }) => isActive ? "text-green-500 border-black" : ""} to='/user/instructors'>Instructors</NavLink></li>
            <li><NavLink className={({ isActive }) => isActive ? "text-green-500 border-black" : ""} k to='/classes'>Classes</NavLink></li>
            <li><NavLink className={({ isActive }) => isActive ? "text-green-500 border-black" : ""} k to='/contact'>Contact Us</NavLink></li>
            {user && <li><NavLink className={({ isActive }) => isActive ? "text-yellow-500 border-black bg-green-200" : ""} to='/dashboard'>Dashboard</NavLink></li>}
        </>
    return (
        <div className='-mt-10 mb-10'>
            <div className={`navbar lg:ps-24 lg:pr-24 fixed z-10 ${isDark ? ' bg-slate-200 text-black' : 'bg-black text-white'}`}>
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 w-52 font-bold bg-zinc-400">
                            {navItem}
                        </ul>
                    </div>
                    {/* <a className="btn btn-ghost normal-case text-xl">daisyUI</a> */}
                    <img className='w-14 rounded' src="https://i.ibb.co/C24ghcf/download.jpg" alt="" />
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1  font-bold">
                        {navItem}
                    </ul>
                </div>
                <div className="navbar-end">
                    <div className=''>
                        <button onClick={handleToggle} className='text-4xl text-white mr-2'>{isDark ? <MdLightMode /> : <MdDarkMode />}</button>
                    </div>
                    <div className='flex items-center'>
                        {
                            user ?
                                <>
                                    <Link onClick={handleLogout} className='btn bg-green-500 text-white'>Logout</Link>
                                    <p><img title={user?.displayName} className='w-12 rounded-full ms-3' src={user?.photoURL} alt="img" /></p>
                                </>

                                :
                                <Link className='btn bg-green-500 text-white' to='/login'>Login</Link>
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
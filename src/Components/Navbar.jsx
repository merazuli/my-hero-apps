import React from 'react';
import { Link, NavLink } from 'react-router';
import { FaGithub } from "react-icons/fa";


const Navbar = () => {
    return (
        <div className="navbar bg-base-100 shadow-sm md:px-10">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex="-1"
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        <li><NavLink to="/">Home</NavLink></li>
                        <li><NavLink to="/app">Apps</NavLink></li>
                        <li><NavLink to="/installation">Installation</NavLink></li>
                    </ul>
                </div>
                <Link to="/" className="flex items-center gap-2">
                    <img
                        className="h-10 w-10 object-contain  rounded-full"
                        src="https://i.ibb.co.com/NgzSk6fk/logo.png"
                        alt="Logo"
                    />
                    <span className="text-xl font-semibold text-purple-500">HERO.IO</span>
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li><NavLink to="/">Home</NavLink></li>
                    <li><NavLink to="/app">Apps</NavLink></li>
                    <li><NavLink to="/installation">Installation</NavLink></li>
                </ul>
            </div>
            <div className="navbar-end">
                <a href='https://github.com/merazuli/' className="btn bg-purple-500 text-white"><span className='text-xl'><FaGithub /></span>Contribute</a>
            </div>
        </div>
    );
};

export default Navbar;
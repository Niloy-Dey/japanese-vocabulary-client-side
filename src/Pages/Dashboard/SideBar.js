import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaTachometerAlt, FaPlusCircle } from 'react-icons/fa';

const SideBar = () => {
    const location = useLocation();

    const isActive = (path) => location.pathname === path;

    return (
        <div className="flex flex-col space-y-4 p-4">
            <h5 className="text-lg font-semibold ">Dashboard</h5>
            <nav className="flex flex-col space-y-2">
                <Link
                    to="/dashboard"
                    className={`flex items-center  bg-white text-black space-x-2 py-2 px-3 rounded-lg ${isActive('/dashboard') ? 'bg-green-600 text-white' : 'hover:bg-green-700 hover:bg-green-700 hover:text-whitev'}`}
                >
                    <FaTachometerAlt />
                    <span>Overview</span>
                </Link>
                <Link
                    to="/"
                    className={`flex items-center bg-white text-black space-x-2 py-2 px-3 rounded-lg ${isActive('/dashboard/categories') ? 'bg-green-600 text-white' : 'hover:bg-green-700 hover:text-white'}`}
                >
                    <FaPlusCircle />
                    <span>Categories</span>
                </Link>
            </nav>
        </div>
    );
};

export default SideBar;

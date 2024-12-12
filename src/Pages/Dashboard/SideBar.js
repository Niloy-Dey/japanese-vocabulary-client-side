import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaTachometerAlt, FaBook, FaPlusCircle, FaUsers, FaListAlt } from 'react-icons/fa';

const SideBar = () => {
    const location = useLocation();

    const isActive = (path) => location.pathname === path;

    return (
        <div className="flex flex-col space-y-4 p-4">
            <h5 className="text-lg font-semibold">Dashboard</h5>
            <nav className="flex flex-col space-y-2">
                {/* <Link to="/dashboard" className={`flex items-center space-x-2 py-2 px-3 rounded-lg ${isActive('/dashboard') ? 'bg-green-600 text-white' : 'bg-white text-black hover:bg-green-700 hover:text-white'}`} > <FaTachometerAlt /> <span>Overview</span> </Link> */}
                <Link to="/dashboard/lessons" className={`flex items-center space-x-2 py-2 px-3 rounded-lg ${isActive('/dashboard/lessons') ? 'bg-green-600 text-white' : 'bg-white text-black hover:bg-green-700 hover:text-white'}`} > <FaBook /> <span>Manage Lessons</span> </Link>
                <Link to="/dashboard/manage-vocabularies" className={`flex items-center space-x-2 py-2 px-3 rounded-lg ${isActive('/dashboard/manage-vocabularies') ? 'bg-green-600 text-white' : 'bg-white text-black hover:bg-green-700 hover:text-white'}`} > <FaListAlt /> <span>Manage Vocabularies</span> </Link>
                <Link to="/dashboard/manage-users" className={`flex items-center space-x-2 py-2 px-3 rounded-lg ${isActive('/dashboard/manage-users') ? 'bg-green-600 text-white' : 'bg-white text-black hover:bg-green-700 hover:text-white'}`} > <FaUsers /> <span>Manage Users</span> </Link>
                <Link to="/dashboard/add-lesson" className={`flex items-center space-x-2 py-2 px-3 rounded-lg ${isActive('/dashboard/add-lesson') ? 'bg-green-600 text-white' : 'bg-white text-black hover:bg-green-700 hover:text-white'}`} > <FaPlusCircle /> <span>Add Lesson</span> </Link>
                <Link to="/dashboard/add-vocabulary" className={`flex items-center space-x-2 py-2 px-3 rounded-lg ${isActive('/dashboard/add-vocabulary') ? 'bg-green-600 text-white' : 'bg-white text-black hover:bg-green-700 hover:text-white'}`} > <FaPlusCircle /> <span>Add Vocabulary</span> </Link>
            </nav>
        </div>
    );
};

export default SideBar;

import React from 'react';
import { Outlet } from 'react-router-dom';
import SideBar from './SideBar';
import Navbar from '../../Component/Shared/Navbar';

const Dashboard = () => {
    return (
        <div className="pt-4">
            <Navbar />
            <div className="flex">
                <div className="w-64  bg-gray-100 text-white h-screen">
                    <SideBar />
                </div>
                <div className="flex-1 p-4">
                    <Outlet /> 
                </div>
            </div>
        </div>
    );
};

export default Dashboard;

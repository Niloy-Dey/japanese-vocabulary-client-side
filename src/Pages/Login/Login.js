import React from 'react';
import Navbar from '../../Component/Shared/Navbar';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div>
            <Navbar />
            <div
                className="relative bg-cover bg-center h-[90vh] flex items-center justify-center lg:justify-start"
                style={{
                    backgroundImage: "url('https://templatekits.themewarrior.com/inlingo-new/wp-content/uploads/sites/102/2023/08/KAAMSGG.jpg')",
                }}
            >
                {/* Overlay */}
                <div className="absolute inset-0 bg-black bg-opacity-60 z-10"></div>

                {/* Content */}
                <div className="relative mx-4 z-20 max-w-md w-full bg-white bg-opacity-30 backdrop-blur-md rounded-lg p-8 shadow-lg lg:ml-40">
                    <h2 className="text-white text-lg font-medium title-font mb-5 text-center lg:text-left">Login In</h2>
                    <div className="mb-4">
                        <label
                            htmlFor="full-name"
                            className="leading-7 text-sm text-white"
                        >
                            Full Name
                        </label>
                        <input
                            type="text"
                            id="full-name"
                            name="full-name"
                            className="w-full bg-transparent rounded border border-gray-300 focus:border-green-500 focus:ring-2 focus:ring-green-500  text-base outline-none text-white py-2 px-4 leading-8 transition-colors duration-200 ease-in-out"
                        />
                    </div>
                    <div className="mb-4">
                        <label
                            htmlFor="email"
                            className="leading-7 text-sm text-white"
                        >
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            className="w-full bg-transparent rounded border border-gray-300 focus:border-green-500 focus:ring-2 focus:ring-green-500  text-base outline-none text-white py-2 px-4 leading-8 transition-colors duration-200 ease-in-out"
                        />
                    </div>
                    <button className="w-full text-white bg-green-500  border-0 py-2 px-8 focus:outline-none hover:bg-green-500  rounded text-lg">
                        Log In
                    </button>
                    <p className="text-sm text-white mt-3 text-center ">
                        Do No Have Any Account Please <span><Link className='text-green-500' to="/register">Register</Link></span>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Login;

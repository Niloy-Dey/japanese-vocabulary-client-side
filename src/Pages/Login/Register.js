import React from 'react';
import Navbar from '../../Component/Shared/Navbar';
import { Link } from 'react-router-dom';

const Register = () => {
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
                <div className="relative z-20 w-full sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl bg-white bg-opacity-30 backdrop-blur-md rounded-lg p-8 shadow-lg lg:ml-40 mx-4 mt-40">
                    <h2 className="text-white text-lg font-medium title-font mb-3 text-center lg:text-left">Register</h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {/* Full Name */}
                        <div className="">
                            <label htmlFor="full-name" className="leading-7 text-sm text-white">
                                Full Name
                            </label>
                            <input
                                type="text"
                                id="full-name"
                                name="full-name"
                                className="w-full bg-transparent rounded border border-gray-300 focus:border-green-500 focus:ring-2 focus:ring-green-500 text-base outline-none text-white py-2 px-4 leading-8 transition-colors duration-200 ease-in-out"
                            />
                        </div>

                        {/* Email */}
                        <div className="">
                            <label htmlFor="email" className="leading-7 text-sm text-white">
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                className="w-full bg-transparent rounded border border-gray-300 focus:border-green-500 focus:ring-2 focus:ring-green-500 text-base outline-none text-white py-2 px-4 leading-8 transition-colors duration-200 ease-in-out"
                            />
                        </div>

                        {/* Photo Upload */}
                        <div className="">
                            <label htmlFor="photo-upload" className="leading-7 text-sm text-white">
                                Upload Photo
                            </label>
                            <div className="flex items-center justify-between border border-gray-300 bg-transparent rounded py-2 px-4 focus-within:ring-2 focus-within:ring-green-500">
                                {/* Hidden File Input */}
                                <input
                                    type="file"
                                    id="photo-upload"
                                    name="photo-upload"
                                    className="hidden"
                                />

                                {/* Custom Button to Trigger File Selection */}
                                <button
                                    type="button"
                                    className="bg-green-500 text-white px-4 py-1 rounded hover:bg-green-600"
                                    onClick={() => document.getElementById('photo-upload').click()}
                                >
                                    Choose Photo
                                </button>
                            </div>
                        </div>

                        {/* Password */}
                        <div className="">
                            <label htmlFor="password" className="leading-7 text-sm text-white">
                                Password
                            </label>
                            <input
                                type="password"
                                id="password"
                                name="password"
                                className="w-full bg-transparent rounded border border-gray-300 focus:border-green-500 focus:ring-2 focus:ring-green-500 text-base outline-none text-white py-2 px-4 leading-8 transition-colors duration-200 ease-in-out"
                            />
                        </div>
                    </div>

                    <button className="w-full mt-4 text-white bg-green-500 border-0 py-2 px-8 focus:outline-none hover:bg-green-600 rounded text-lg">
                        Register
                    </button>

                    <p className="text-sm text-white mt-3 text-center">
                        If you have any account, please <span><Link className='text-green-500' to="/login">Login</Link></span>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Register;

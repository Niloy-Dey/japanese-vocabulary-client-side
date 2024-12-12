import React, { useState } from 'react';
import Navbar from '../../Component/Shared/Navbar';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle, useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const Register = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [createUserWithEmailAndPassword, user, loading, error] = useCreateUserWithEmailAndPassword(auth);
    const [ gUser, gLoading, gError] = useSignInWithGoogle(auth);
    const [updateProfile, updating, updateError] = useUpdateProfile(auth);
    const [loginData, setLoginData] = useState({});
    const navigate = useNavigate();
    
    let signInError;

    // Handle errors from various operations
    if (error || gError || updateError) {
        signInError = <p className='text-red-500'><small>{error?.message || gError?.message || updateError?.message}</small></p>;
    }

    // Redirect if user is successfully registered
    if (user || gUser) {
        navigate('/home');
    }


    // Form submission handler
    const onSubmit = async (data) => {
        const { name, email, password } = data;

        // Register user with email and password
        await createUserWithEmailAndPassword(email, password);

        // Update the profile with the user's name
        await updateProfile({ displayName: name });

        // Prepare the user object
        const userObject = {
            name,
            email,
            password, // You would likely want to hash passwords on the server, not send plain text
            role: 'user'
        };

        // Send user data to your backend
        fetch('http://localhost:5000/user', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userObject)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    console.log("User data saved to backend successfully");
                }
            });

        setLoginData(userObject);
        navigate('/home');
    };

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

                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {/* Full Name */}
                            <div className="">
                                <label htmlFor="name" className="leading-7 text-sm text-white">Full Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    className="w-full bg-transparent rounded border border-gray-300 focus:border-green-500 focus:ring-2 focus:ring-green-500 text-base outline-none text-white py-2 px-4 leading-8 transition-colors duration-200 ease-in-out"
                                    {...register("name", { required: "Full Name is required" })}
                                />
                                {errors.name && <p className="text-red-500">{errors.name.message}</p>}
                            </div>

                            {/* Email */}
                            <div className="">
                                <label htmlFor="email" className="leading-7 text-sm text-white">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    className="w-full bg-transparent rounded border border-gray-300 focus:border-green-500 focus:ring-2 focus:ring-green-500 text-base outline-none text-white py-2 px-4 leading-8 transition-colors duration-200 ease-in-out"
                                    {...register("email", { required: "Email is required" })}
                                />
                                {errors.email && <p className="text-red-500">{errors.email.message}</p>}
                            </div>

                            {/* Password */}
                            <div className="">
                                <label htmlFor="password" className="leading-7 text-sm text-white">Password</label>
                                <input
                                    type="password"
                                    id="password"
                                    className="w-full bg-transparent rounded border border-gray-300 focus:border-green-500 focus:ring-2 focus:ring-green-500 text-base outline-none text-white py-2 px-4 leading-8 transition-colors duration-200 ease-in-out"
                                    {...register("password", { required: "Password is required" })}
                                />
                                {errors.password && <p className="text-red-500">{errors.password.message}</p>}
                            </div>
                        </div>

                        {/* Error message */}
                        {signInError}

                        <button type="submit" className="w-full mt-4 text-white bg-green-500 border-0 py-2 px-8 focus:outline-none hover:bg-green-600 rounded text-lg">
                            Register
                        </button>
                    </form>

                    <div className="mt-4 text-center">
                        <p className="text-white text-sm">Already have an account? <Link to="/login" className="text-green-500">Login</Link></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;

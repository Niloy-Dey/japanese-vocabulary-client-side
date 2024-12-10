// src/routes.js
import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
// import { useAuth } from '../context/AuthContext.js';
import Home from '../Pages/Home/Home.js';
import Dashboard from '../Pages/Dashboard/Dashboard.js';
import Lesson from '../Pages/Lesson/Lesson.js';
import Login from '../Pages/Login/Login.js';
import Tutorials from '../Pages/Tutorials/Tutorials.js';


// const ProtectedRoute = ({ children }) => {
//     const authContext = useAuth(); // Get auth context
//     console.log(authContext); // Check what you get from useAuth
//     const { token } = useAuth(); // Get token from context
//     return token ? children : <Navigate to="/login" />;
// };

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/lessons" element={<Lesson />} />
            <Route path="/tutorials" element={<Tutorials />} />
            <Route path="/login" element={<Login />} />

            {/* <Route path="/exterior" element={<Exterior />} /> */}
            
            {/* <Route path="/details/:id" element={<ProjectsDetails />} /> */}

            <Route path="/dashboard" >
            {/* <Route path="/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>}> */}
                <Route index element={<Dashboard />} /> 
                {/* <Route path="updateProject" element={<ProjectListForUpdate />} /> */}
                {/* <Route path="updateproject/:id" element={<UpdateProject />} /> */}

                {/* <Route path="changeImage" element={<ChangeImage />} /> */}
            </Route>

        </Routes>
    );
};

export default AppRoutes;

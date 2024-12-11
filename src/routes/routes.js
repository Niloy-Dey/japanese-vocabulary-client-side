import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../Pages/Home/Home.js';
import Dashboard from '../Pages/Dashboard/Dashboard.js';
import Lesson from '../Pages/Lesson/Lesson.js';
import Login from '../Pages/Login/Login.js';
import Tutorials from '../Pages/Tutorials/Tutorials.js';
import Register from '../Pages/Login/Register.js';
import LessonDetails from '../Pages/Lesson/LessonDetails.js';
import BlogDetails from '../Pages/Home/BlogDetails.js';
import Overview from '../Pages/Dashboard/Overview.js';
import ManageLessons from '../Pages/Dashboard/ManageLessons.js';
import AddLesson from '../Pages/Dashboard/AddLesson.js';
import AddVocabulary from '../Pages/Dashboard/AddVocabulary.js';
import ManageUsers from '../Pages/Dashboard/ManageUsers.js';
import ManageVocabularies from '../Pages/Dashboard/ManageVocabularies.js';
import VocabularyLesson from '../Pages/VocabularyLesson/VocabularyLesson.js';

const AppRoutes = () => {
    return (
        <Routes>
            {/* Public Routes */}
            <Route path="/" element={<Home />} />
            <Route path="/lessons" element={<Lesson />} />
            <Route path="/lessons/:id" element={<LessonDetails />} />
            <Route path="/blog/:id" element={<BlogDetails />} />
            <Route path="/tutorials" element={<Tutorials />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/vocubularyLesson" element={<VocabularyLesson />} />




            {/* Dashboard Routes */}
            <Route path="/dashboard" element={<Dashboard />}>
                <Route index element={<Overview />} /> {/* Default dashboard child */}
                <Route path="lessons" element={<ManageLessons />} />
                <Route path="add-lesson" element={<AddLesson />} />
                <Route path="add-vocabulary" element={<AddVocabulary />} />
                <Route path="manage-users" element={<ManageUsers />} />
                <Route path="manage-vocabularies" element={<ManageVocabularies />} />
            </Route>
        </Routes>
    );
};

export default AppRoutes;

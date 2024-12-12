import React, { useEffect, useState } from 'react';
import Navbar from '../../Component/Shared/Navbar';
import Footer from '../../Component/Shared/Footer';
import { useNavigate } from 'react-router-dom';

const Lesson = () => {
    const [lessons, setLessons] = useState([]);
    const navigate = useNavigate();

    // Fetch lessons from the JSON file
    useEffect(() => {
        fetch('/lessons.json')
            .then((response) => response.json())
            .then((data) => setLessons(data))
            .catch((error) => console.error('Error fetching lessons:', error));
    }, []);

    // Navigate to the lesson details page
    const handleViewLesson = (lesson) => {
        navigate(`/lessons/${lesson.id}`);
    };

    return (
        <div>
            <Navbar />
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <h1 className="text-3xl font-semibold mb-6">Available Lessons</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {lessons.map((lesson) => (
                        <div 
                            key={lesson.id} 
                            className="bg-white shadow-md rounded-lg hover:shadow-green-500 overflow-hidden"
                        >
                            <img
                                src={lesson.image}
                                alt={lesson.title}
                                className="w-full h-48 object-cover"
                            />
                            <div className="p-6">
                                <h2 className="text-xl font-semibold">{lesson.title}</h2>
                                <p className="mt-2 text-gray-600">{lesson.description}</p>
                                <button
                                    onClick={() => handleViewLesson(lesson)}
                                    className="mt-4 px-6 py-2 bg-green-500 text-white rounded-md hover:bg-black"
                                >
                                    View Lesson
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Lesson;


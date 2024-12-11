import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Navbar from '../../Component/Shared/Navbar';
import Footer from '../../Component/Shared/Footer';

const LessonDetails = () => {
    const { id } = useParams(); // Get lesson ID from URL
    const navigate = useNavigate();
    const [lesson, setLesson] = useState(null);
    const [selectedStep, setSelectedStep] = useState(0);
    const [quizAnswers, setQuizAnswers] = useState({});

    useEffect(() => {
        // Fetch the lesson details using the ID
        fetch('/lessons.json')
            .then((response) => response.json())
            .then((data) => {
                const selectedLesson = data.find((lesson) => lesson.id === parseInt(id));
                if (!selectedLesson) navigate('/lessons'); // Redirect if lesson not found
                setLesson(selectedLesson);
            })
            .catch((error) => console.error('Error fetching lesson:', error));
    }, [id, navigate]);

    const handleQuizAnswer = (questionIndex, answer) => {
        setQuizAnswers((prev) => ({ ...prev, [questionIndex]: answer }));
    };

    const checkQuizResults = () => {
        const quiz = lesson.steps[selectedStep].quiz;
        const correctAnswers = quiz.questions.filter(
            (q, index) => quizAnswers[index] === q.answer
        );
        alert(`You answered ${correctAnswers.length}/${quiz.questions.length} questions correctly!`);
    };

    if (!lesson) return null; // Render nothing until lesson is loaded

    return (
        <div>
            <Navbar />
            {/* Lesson Banner */}
            <div
                className="relative bg-cover bg-center h-64 flex items-center justify-center text-white text-3xl font-bold"
                style={{ backgroundImage: `url(${lesson.image})` }}
            >
                {lesson.title}
            </div>

            {/* Lesson Content */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 grid grid-cols-1 lg:grid-cols-4 gap-6">
                {/* Left Sidebar */}
                <div className="bg-gray-100 p-4 rounded-lg lg:col-span-1">
                    <h2 className="text-lg font-bold mb-4">Lesson Steps</h2>
                    <ul className="space-y-2">
                        {lesson.steps.map((step, index) => (
                            <li
                                key={index}
                                className={`p-3 rounded-md cursor-pointer ${
                                    selectedStep === index
                                        ? 'bg-blue-500 text-white'
                                        : 'bg-white text-gray-700 hover:bg-blue-100'
                                }`}
                                onClick={() => setSelectedStep(index)}
                            >
                                {step.title}
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Right Content Area */}
                <div className="lg:col-span-3 bg-white shadow-lg rounded-lg p-6">
                    <h2 className="text-2xl font-bold">{lesson.steps[selectedStep].title}</h2>
                    <p className="mt-4 text-gray-700">{lesson.steps[selectedStep].content}</p>

                    {/* Render Quiz for Last Step */}
                    {lesson.steps[selectedStep].quiz && (
                        <div className="mt-6">
                            <h3 className="text-xl font-semibold mb-4">Quiz</h3>
                            {lesson.steps[selectedStep].quiz.questions.map((q, index) => (
                                <div key={index} className="mb-4">
                                    <p className="font-medium">{q.question}</p>
                                    <div className="space-y-2">
                                        {q.options.map((option) => (
                                            <label
                                                key={option}
                                                className="block cursor-pointer"
                                            >
                                                <input
                                                    type="radio"
                                                    name={`question-${index}`}
                                                    value={option}
                                                    onChange={() => handleQuizAnswer(index, option)}
                                                    className="mr-2"
                                                />
                                                {option}
                                            </label>
                                        ))}
                                    </div>
                                </div>
                            ))}
                            <button
                                onClick={checkQuizResults}
                                className="mt-4 px-6 py-2 bg-green-500 text-white rounded-md hover:bg-green-600"
                            >
                                Submit Quiz
                            </button>
                        </div>
                    )}
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default LessonDetails;

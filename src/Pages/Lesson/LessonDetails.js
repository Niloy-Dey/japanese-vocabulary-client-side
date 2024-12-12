import React, { useState, useEffect, useRef } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Navbar from '../../Component/Shared/Navbar';
import Footer from '../../Component/Shared/Footer';

const LessonDetails = () => {
    const { id } = useParams(); // Get the lesson ID from the URL
    const navigate = useNavigate();
    const [lesson, setLesson] = useState(null); // State to hold the lesson data
    const [selectedStep, setSelectedStep] = useState(0); // State to handle current step
    const [currentVocabIndex, setCurrentVocabIndex] = useState(0); // State to handle vocab index
    const audioRef = useRef(null); // Ref to control audio playback

    useEffect(() => {
        // Fetch lesson data from the backend API
        fetch(`https://japanese-vocabulary-chi.vercel.app/api/lessons/${id}`)
            .then((response) => response.json())
            .then((data) => {
                if (!data) {
                    navigate('/lessons'); // Redirect if no lesson found
                } else {
                    setLesson(data); // Set the fetched lesson data
                }
            })
            .catch((error) => console.error('Error fetching lesson:', error));
    }, [id, navigate]);

    const playPronunciation = (audio) => {
        if (audioRef.current) {
            audioRef.current.src = audio; // Set the audio source
            audioRef.current.play(); // Play the audio
        }
    };

    const handleNextVocab = (vocabularies) => {
        if (currentVocabIndex < vocabularies.length - 1) {
            setCurrentVocabIndex(currentVocabIndex + 1);
        }
    };

    const handlePreviousVocab = () => {
        if (currentVocabIndex > 0) {
            setCurrentVocabIndex(currentVocabIndex - 1);
        }
    };

    if (!lesson) {
        return <div className="flex justify-center items-center h-screen"><p className="text-xl font-semibold">Loading...</p></div>;
    }

    const { steps } = lesson; // Destructure steps from lesson
    const currentStep = steps[selectedStep]; // Get the current step
    const vocabularies = currentStep.vocabularies || []; // Get vocabularies from the current step

    return (
        <div>
            <Navbar />
            <div
                className="relative bg-cover bg-center h-[50vh] flex items-center justify-center"
                style={{ backgroundImage: `url(${lesson.image})` }} // Background image for the lesson
            >
                <div className="absolute inset-0 bg-black bg-opacity-50"></div>
                <div className="relative z-10 text-center text-white">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">{lesson.title}</h1>
                    <p className="text-lg md:text-xl max-w-3xl mx-auto">{lesson.description}</p>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 py-8 grid grid-cols-1 lg:grid-cols-4 gap-6">
                {/* Sidebar */}
                <div className="bg-white shadow-md rounded-lg p-4">
                    <h2 className="text-lg font-bold mb-4 text-gray-700">Lesson Steps</h2>
                    <ul className="space-y-3">
                        {steps.map((step, index) => (
                            <li
                                key={index}
                                className={`p-3 rounded-lg cursor-pointer ${selectedStep === index
                                    ? 'bg-green-500 text-white'
                                    : 'bg-gray-100 text-gray-700 hover:bg-green-100'
                                    } transition-all`}
                                onClick={() => {
                                    setSelectedStep(index);
                                    setCurrentVocabIndex(0); // Reset vocab index when step changes
                                }}
                            >
                                {step.title}
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Main Content */}
                <div className="lg:col-span-3 bg-white shadow-lg rounded-lg p-6">
                    <h2 className="text-3xl font-bold mb-4 text-gray-800">{currentStep.title}</h2>
                    <p className="text-gray-600 mb-6">{currentStep.content}</p>

                    {vocabularies.length > 0 && (
                        <div className="text-center">
                            <h3
                                className="text-4xl font-bold mb-4 cursor-pointer hover:text-green-500 transition"
                                onClick={() => playPronunciation(vocabularies[currentVocabIndex].audio)}
                            >
                                {vocabularies[currentVocabIndex].word}
                            </h3>
                            <audio ref={audioRef} />

                            <p className="text-lg text-gray-600 mb-2">
                                Pronunciation: <span className="font-bold">{vocabularies[currentVocabIndex].pronunciation}</span>
                            </p>
                            <p className="text-lg text-gray-600 mb-2">
                                Meaning: <span className="font-bold">{vocabularies[currentVocabIndex].meaning}</span>
                            </p>
                            <p className="text-gray-700 mb-6">{vocabularies[currentVocabIndex].whenToSay}</p>

                            <div className="flex justify-center space-x-4">
                                <button
                                    onClick={handlePreviousVocab}
                                    disabled={currentVocabIndex === 0}
                                    className={`px-6 py-2 rounded-lg ${currentVocabIndex === 0
                                        ? 'bg-gray-300 cursor-not-allowed'
                                        : 'bg-green-500 text-white hover:bg-green-600 transition'
                                        }`}
                                >
                                    Previous
                                </button>
                                <button
                                    onClick={() => handleNextVocab(vocabularies)}
                                    disabled={currentVocabIndex === vocabularies.length - 1}
                                    className={`px-6 py-2 rounded-lg ${currentVocabIndex === vocabularies.length - 1
                                        ? 'bg-gray-300 cursor-not-allowed'
                                        : 'bg-green-500 text-white hover:bg-green-600 transition'
                                        }`}
                                >
                                    Next
                                </button>
                            </div>
                        </div>
                    )}

                    {selectedStep === steps.length - 1 && (
                        <div className="text-center mt-8">
                            <button
                                onClick={() => navigate('/lessons')}
                                className="bg-green-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-600 transition"
                            >
                                Complete Lesson
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

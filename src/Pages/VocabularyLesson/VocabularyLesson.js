import React, { useState, useEffect, useRef } from 'react';
import Navbar from '../../Component/Shared/Navbar';
import Footer from '../../Component/Shared/Footer';
import Confetti from 'react-confetti';
import { useNavigate } from 'react-router-dom';

const vocabularies = [
    {
        word: 'こんにちは',
        pronunciation: 'Konnichiwa',
        whenToSay: 'Use this to greet someone during the day (Hello).',
        audio: '/audio/konnichiwa.mp3'
    },
    {
        word: 'ありがとう',
        pronunciation: 'Arigatou',
        whenToSay: 'Say this to thank someone (Thank you).',
        audio: '/audio/arigatou.mp3'
    },
    {
        word: 'さようなら',
        pronunciation: 'Sayounara',
        whenToSay: 'Say this when you are saying goodbye (Goodbye).',
        audio: '/audio/sayounara.mp3'
    }
    // Add more vocabularies here...
];

const VocabularyLesson = () => {
    const [currentIndex, setCurrentIndex] = useState(0); // Track the current vocabulary index
    const [isComplete, setIsComplete] = useState(false); // Track lesson completion
    const audioRef = useRef(null); // Reference for the pronunciation audio
    const navigate = useNavigate();

    // Handle playing the pronunciation when word is clicked
    const playPronunciation = () => {
        if (audioRef.current) {
            audioRef.current.play();
        }
    };

    // Go to the next vocabulary
    const handleNext = () => {
        if (currentIndex < vocabularies.length - 1) {
            setCurrentIndex(currentIndex + 1);
        } else {
            setIsComplete(true); // If last word, mark lesson as complete
        }
    };

    // Go to the previous vocabulary
    const handlePrevious = () => {
        if (currentIndex > 0) {
            setCurrentIndex(currentIndex - 1);
        }
    };

    // Handle lesson completion
    const handleComplete = () => {
        setIsComplete(false); // Reset completion state
        navigate('/lessons'); // Redirect back to lessons page
    };

    const vocabulary = vocabularies[currentIndex];

    return (
        <div>
            <Navbar />
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="bg-white shadow-lg rounded-lg p-6">
                    <h1 className="text-3xl font-bold mb-4 text-center">Vocabulary Learning</h1>
                    <div className="text-center">
                        {/* Vocabulary Word */}
                        <h2
                            className="text-5xl font-bold mb-4 cursor-pointer hover:text-green-500 transition"
                            onClick={playPronunciation}
                        >
                            {vocabulary.word}
                        </h2>
                        <audio ref={audioRef} src={vocabulary.audio} />

                        {/* Vocabulary Pronunciation */}
                        <p className="text-xl text-gray-600 mb-2">
                            Pronunciation: <span className="font-bold">{vocabulary.pronunciation}</span>
                        </p>

                        {/* When to Say */}
                        <p className="text-gray-700 mb-6">{vocabulary.whenToSay}</p>

                        {/* Pagination Controls */}
                        <div className="flex justify-center space-x-4">
                            <button
                                onClick={handlePrevious}
                                disabled={currentIndex === 0}
                                className={`px-6 py-2 rounded-md ${currentIndex === 0
                                    ? 'bg-gray-300 cursor-not-allowed'
                                    : 'bg-green-500 hover:bg-black text-white transition'
                                    }`}
                            >
                                Previous
                            </button>
                            <button
                                onClick={handleNext}
                                disabled={currentIndex === vocabularies.length - 1}
                                className={`px-6 py-2 rounded-md ${currentIndex === vocabularies.length - 1
                                    ? 'bg-gray-300 cursor-not-allowed'
                                    : 'bg-green-500 hover:bg-black text-white transition'
                                    }`}
                            >
                                Next
                            </button>
                        </div>
                    </div>
                </div>

                {/* Show Complete button after the last vocabulary */}
                {isComplete && (
                    <div className="mt-6 text-center">
                        <button
                            onClick={handleComplete}
                            className="bg-green-500 text-white px-4 py-2 rounded hover:bg-black transition duration-300"
                        >
                            Complete Lesson
                        </button>
                        <Confetti /> {/* Confetti animation */}
                    </div>
                )}
            </div>
            <Footer />
        </div>
    );
};

export default VocabularyLesson;

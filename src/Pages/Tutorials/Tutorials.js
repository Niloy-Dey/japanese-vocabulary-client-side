import React, { useState } from 'react';
import Navbar from '../../Component/Shared/Navbar';
import Footer from '../../Component/Shared/Footer';

const Tutorials = () => {
    const [selectedCategory, setSelectedCategory] = useState('All');

    // Data for tutorials with a focus on Japanese-English vocabulary
    const videos = [
        { 
            title: 'Basic Greetings in Japanese and English', 
            url: 'https://www.youtube.com/embed/xyz123abc456', 
            category: 'Greetings', 
            description: 'Learn how to say basic greetings like "Hello" and "Goodbye" in both Japanese and English.' 
        },
        { 
            title: 'Common Phrases for Travelers', 
            url: 'https://www.youtube.com/embed/abc789xyz123', 
            category: 'Travel', 
            description: 'Master common travel phrases to use in Japan or English-speaking countries.' 
        },
        { 
            title: 'Japanese Kanji for Beginners', 
            url: 'https://www.youtube.com/embed/example123', 
            category: 'Kanji', 
            description: 'Learn beginner-level kanji characters and their English meanings.' 
        },
        { 
            title: 'Pronunciation Tips for Japanese and English', 
            url: 'https://www.youtube.com/embed/kJQP7kiw5Fk', 
            category: 'Pronunciation', 
            description: 'Improve your pronunciation in both Japanese and English.' 
        },
        { 
            title: 'Everyday Vocabulary: Food Items', 
            url: 'https://www.youtube.com/embed/fSUn5P4kK8g', 
            category: 'Vocabulary', 
            description: 'Learn the names of common food items in Japanese and English.' 
        },
    ];

    const categories = ['All', 'Greetings', 'Travel', 'Kanji', 'Pronunciation', 'Vocabulary'];

    const filteredVideos =
        selectedCategory === 'All'
            ? videos
            : videos.filter((video) => video.category === selectedCategory);

    return (
        <div>
            <Navbar />
            <div className="max-w-7xl pt-40 pb-40 mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <h1 className="text-3xl font-bold text-center mb-8">Japanese-English Vocabulary Tutorials</h1>

                {/* Category Filter */}
                <div className="flex justify-center mb-8 space-x-4">
                    {categories.map((category) => (
                        <button
                            key={category}
                            onClick={() => setSelectedCategory(category)}
                            className={`px-4 py-2 rounded-md text-white ${
                                selectedCategory === category
                                    ? 'bg-red-600'
                                    : 'bg-gray-400 hover:bg-red-500'
                            }`}
                        >
                            {category}
                        </button>
                    ))}
                </div>

                {/* Tutorials Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredVideos.map((video, index) => (
                        <div key={index} className="bg-white shadow-md rounded-lg overflow-hidden">
                            <iframe
                                width="100%"
                                height="200"
                                src={video.url}
                                title={video.title}
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                                className="mb-4"
                            ></iframe>
                            <div className="p-4">
                                <h2 className="text-xl font-semibold">{video.title}</h2>
                                <p className="text-sm text-gray-600 mb-2">{video.category}</p>
                                <p className="text-gray-700">{video.description}</p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* No Tutorials Message */}
                {filteredVideos.length === 0 && (
                    <p className="text-center text-gray-500 mt-6">No tutorials available for this category.</p>
                )}
            </div>
            <Footer />
        </div>
    );
};

export default Tutorials;

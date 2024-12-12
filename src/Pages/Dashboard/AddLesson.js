import React, { useState } from 'react';

const AddLesson = () => {
    const [lesson, setLesson] = useState({
        title: "",
        description: "",
        image: "",
        steps: []
    });

    const [currentStep, setCurrentStep] = useState({
        title: "",
        content: "",
        vocabularies: []
    });

    const [currentVocabulary, setCurrentVocabulary] = useState({
        word: "",
        pronunciation: "",
        whenToSay: "",
        meaning: "",
        audio: ""
    });

    const handleLessonChange = (e) => {
        const { name, value } = e.target;
        setLesson({ ...lesson, [name]: value });
    };

    const handleStepChange = (e) => {
        const { name, value } = e.target;
        setCurrentStep({ ...currentStep, [name]: value });
    };

    const handleVocabularyChange = (e) => {
        const { name, value } = e.target;
        setCurrentVocabulary({ ...currentVocabulary, [name]: value });
    };

    const addVocabulary = () => {
        setCurrentStep({
            ...currentStep,
            vocabularies: [...currentStep.vocabularies, currentVocabulary]
        });
        setCurrentVocabulary({ word: "", pronunciation: "", whenToSay: "", meaning: "", audio: "" });
    };

    const addStep = () => {
        setLesson({
            ...lesson,
            steps: [...lesson.steps, currentStep]
        });
        setCurrentStep({ title: "", content: "", vocabularies: [] });
    };

    const handleSubmit = () => {
        console.log("Lesson Submitted:", lesson);
        setLesson({ title: "", description: "", image: "", steps: [] });
    };

    return (
        <div className="p-6 py-20 card font-sans">
            <h1 className="text-2xl font-bold mb-6">Add New Lesson</h1>

            <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                    Lesson Title:
                </label>
                <input
                    type="text"
                    name="title"
                    value={lesson.title}
                    onChange={handleLessonChange}
                    className="w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-indigo-200"
                />
            </div>

            <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                    Description:
                </label>
                <textarea
                    name="description"
                    value={lesson.description}
                    onChange={handleLessonChange}
                    className="w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-indigo-200"
                    rows="4"
                ></textarea>
            </div>

            <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                    Image URL:
                </label>
                <input
                    type="text"
                    name="image"
                    value={lesson.image}
                    onChange={handleLessonChange}
                    className="w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-indigo-200"
                />
            </div>

            <div className="border border-gray-300 rounded-md p-4 mb-6">
                <h2 className="text-lg font-semibold mb-4">Add Step</h2>

                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                        Step Title:
                    </label>
                    <input
                        type="text"
                        name="title"
                        value={currentStep.title}
                        onChange={handleStepChange}
                        className="w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-indigo-200"
                    />
                </div>

                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                        Step Content:
                    </label>
                    <textarea
                        name="content"
                        value={currentStep.content}
                        onChange={handleStepChange}
                        className="w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-indigo-200"
                        rows="4"
                    ></textarea>
                </div>

                <div className="border border-gray-200 rounded-md p-4 mb-4">
                    <h3 className="text-md font-semibold mb-4">Add Vocabulary</h3>

                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            Word:
                        </label>
                        <input
                            type="text"
                            name="word"
                            value={currentVocabulary.word}
                            onChange={handleVocabularyChange}
                            className="w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-indigo-200"
                        />
                    </div>

                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            Pronunciation:
                        </label>
                        <input
                            type="text"
                            name="pronunciation"
                            value={currentVocabulary.pronunciation}
                            onChange={handleVocabularyChange}
                            className="w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-indigo-200"
                        />
                    </div>

                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            When to Say:
                        </label>
                        <input
                            type="text"
                            name="whenToSay"
                            value={currentVocabulary.whenToSay}
                            onChange={handleVocabularyChange}
                            className="w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-indigo-200"
                        />
                    </div>

                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            Meaning:
                        </label>
                        <input
                            type="text"
                            name="meaning"
                            value={currentVocabulary.meaning}
                            onChange={handleVocabularyChange}
                            className="w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-indigo-200"
                        />
                    </div>

                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            Audio URL:
                        </label>
                        <input
                            type="text"
                            name="audio"
                            value={currentVocabulary.audio}
                            onChange={handleVocabularyChange}
                            className="w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-indigo-200"
                        />
                    </div>

                    <button
                        onClick={addVocabulary}
                        className="px-4 py-2 bg-blue-500 text-white rounded-md shadow-sm hover:bg-blue-600"
                    >
                        Add Vocabulary
                    </button>
                </div>

                <button
                    onClick={addStep}
                    className="px-4 py-2 bg-green-500 text-white rounded-md shadow-sm hover:bg-green-600"
                >
                    Add Step
                </button>
            </div>

            <button
                onClick={handleSubmit}
                className="px-6 py-2 bg-indigo-500 text-white rounded-md shadow-sm hover:bg-indigo-600"
            >
                Submit Lesson
            </button>
        </div>
    );
};

export default AddLesson;
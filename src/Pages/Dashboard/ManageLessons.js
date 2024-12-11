import React, { useState } from 'react';

const ManageLessons = () => {
    // State for lessons
    const [lessons, setLessons] = useState([]);
    const [newLesson, setNewLesson] = useState({ name: '', number: '' });
    const [isEditing, setIsEditing] = useState(false);
    const [editLessonId, setEditLessonId] = useState(null);
    const [editLesson, setEditLesson] = useState({ name: '', number: '' });

    // Handle input changes for new lesson
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewLesson((prev) => ({ ...prev, [name]: value }));
    };

    // Add new lesson
    const addLesson = () => {
        if (newLesson.name && newLesson.number) {
            setLessons([...lessons, { ...newLesson, vocabCount: 0, id: Date.now() }]);
            setNewLesson({ name: '', number: '' }); // Clear the form
        }
    };

    // Delete a lesson
    const deleteLesson = (id) => {
        const confirmDelete = window.confirm("Are you sure you want to delete this lesson?");
        if (confirmDelete) {
            setLessons(lessons.filter((lesson) => lesson.id !== id));
        }
    };

    // Start editing a lesson
    const startEditing = (lesson) => {
        setIsEditing(true);
        setEditLessonId(lesson.id);
        setEditLesson({ name: lesson.name, number: lesson.number });
    };

    // Handle input changes for editing
    const handleEditInputChange = (e) => {
        const { name, value } = e.target;
        setEditLesson((prev) => ({ ...prev, [name]: value }));
    };

    // Save edited lesson
    const saveEditLesson = () => {
        setLessons(lessons.map((lesson) =>
            lesson.id === editLessonId ? { ...lesson, name: editLesson.name, number: editLesson.number } : lesson
        ));
        setIsEditing(false);
        setEditLessonId(null);
        setEditLesson({ name: '', number: '' });
    };

    return (
        <div className="container mx-auto p-4 pt-20">
            <h1 className="text-2xl font-bold mb-4">Lesson Management</h1>

            {/* Create Lesson Form */}
            <div className="mb-8">
                <h2 className="text-xl mb-4">Create a Lesson</h2>
                <div className="flex space-x-4 mb-4">
                    <input
                        type="text"
                        name="name"
                        value={newLesson.name}
                        onChange={handleInputChange}
                        placeholder="Lesson Name"
                        className="border p-2 rounded w-1/2"
                    />
                    <input
                        type="number"
                        name="number"
                        value={newLesson.number}
                        onChange={handleInputChange}
                        placeholder="Lesson Number"
                        className="border p-2 rounded w-1/4"
                    />
                    <button
                        onClick={addLesson}
                        className="bg-green-500 w-72 text-white px-4 py-2 rounded"
                    >
                        Add Lesson
                    </button>
                </div>
            </div>

            {/* View All Lessons */}
            <div>
                <h2 className="text-xl mb-4">All Lessons</h2>
                <table className="min-w-full bg-white border rounded-lg">
                    <thead>
                        <tr className="bg-gray-100">
                            <th className="p-3 border">Lesson Name</th>
                            <th className="p-3 border">Lesson Number</th>
                            <th className="p-3 border">Vocabulary Count</th>
                            <th className="p-3 border">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {lessons.length > 0 ? (
                            lessons.map((lesson) => (
                                <tr key={lesson.id}>
                                    <td className="p-3 border">{lesson.name}</td>
                                    <td className="p-3 border">{lesson.number}</td>
                                    <td className="p-3 border">{lesson.vocabCount}</td>
                                    <td className="p-3 border space-x-2">
                                        <button
                                            onClick={() => startEditing(lesson)}
                                            className="bg-blue-500 text-white px-3 py-1 rounded"
                                        >
                                            Edit
                                        </button>
                                        <button
                                            onClick={() => deleteLesson(lesson.id)}
                                            className="bg-red-500 text-white px-3 py-1 rounded"
                                        >
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="4" className="text-center p-3">
                                    No lessons available
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>

            {/* Edit Lesson Modal */}
            {isEditing && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
                    <div className="bg-white p-6 rounded-lg">
                        <h2 className="text-xl mb-4">Edit Lesson</h2>
                        <div className="space-y-4">
                            <input
                                type="text"
                                name="name"
                                value={editLesson.name}
                                onChange={handleEditInputChange}
                                placeholder="Lesson Name"
                                className="border p-2 rounded w-full"
                            />
                            <input
                                type="number"
                                name="number"
                                value={editLesson.number}
                                onChange={handleEditInputChange}
                                placeholder="Lesson Number"
                                className="border p-2 rounded w-full"
                            />
                        </div>
                        <div className="flex space-x-4 mt-4">
                            <button
                                onClick={saveEditLesson}
                                className="bg-green-500 text-white px-4 py-2 rounded"
                            >
                                Save
                            </button>
                            <button
                                onClick={() => setIsEditing(false)}
                                className="bg-gray-500 text-white px-4 py-2 rounded"
                            >
                                Cancel
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ManageLessons;

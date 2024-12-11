import React, { useState } from 'react';

const ManageVocabularies = () => {
    const [vocabularies, setVocabularies] = useState([]);
    const [newVocab, setNewVocab] = useState({
        word: '',
        pronunciation: '',
        meaning: '',
        whenToSay: '',
        lessonNo: '',
        adminEmail: ''
    });
    const [editingVocab, setEditingVocab] = useState(null);
    const [filterLesson, setFilterLesson] = useState('');

    // Handle form input change for adding a new vocabulary
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewVocab({ ...newVocab, [name]: value });
    };

    // Handle adding a new vocabulary
    const handleAddVocab = () => {
        setVocabularies([...vocabularies, { ...newVocab, id: Date.now() }]);
        setNewVocab({
            word: '',
            pronunciation: '',
            meaning: '',
            whenToSay: '',
            lessonNo: '',
            adminEmail: ''
        });
    };

    // Handle editing a vocabulary
    const handleEditVocab = (id) => {
        const vocabToEdit = vocabularies.find(vocab => vocab.id === id);
        setEditingVocab(vocabToEdit);
    };

    // Handle saving updated vocabulary
    const handleSaveEdit = () => {
        setVocabularies(vocabularies.map(vocab => 
            vocab.id === editingVocab.id ? editingVocab : vocab
        ));
        setEditingVocab(null);
    };

    // Handle deleting a vocabulary
    const handleDeleteVocab = (id) => {
        if (window.confirm('Are you sure you want to delete this vocabulary?')) {
            setVocabularies(vocabularies.filter(vocab => vocab.id !== id));
        }
    };

    // Handle filter by lesson number
    const handleFilterChange = (e) => {
        setFilterLesson(e.target.value);
    };

    // Filtered vocabularies based on lesson number
    const filteredVocabularies = vocabularies.filter(vocab => 
        filterLesson === '' || vocab.lessonNo === filterLesson
    );

    return (
        <div className="container mx-auto px-4 py-16">
            
            {/* Vocabulary Form */}
            <div className="bg-white p-6 rounded-lg shadow-lg mb-8">
                <h3 className="text-xl font-semibold mb-4">Create a Vocabulary</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <input 
                        type="text" 
                        name="word" 
                        value={newVocab.word} 
                        placeholder="Word" 
                        onChange={handleInputChange}
                        className="border border-gray-300 rounded-lg p-2"
                    />
                    <input 
                        type="text" 
                        name="pronunciation" 
                        value={newVocab.pronunciation} 
                        placeholder="Pronunciation" 
                        onChange={handleInputChange}
                        className="border border-gray-300 rounded-lg p-2"
                    />
                    <input 
                        type="text" 
                        name="meaning" 
                        value={newVocab.meaning} 
                        placeholder="Meaning" 
                        onChange={handleInputChange}
                        className="border border-gray-300 rounded-lg p-2"
                    />
                    <input 
                        type="text" 
                        name="whenToSay" 
                        value={newVocab.whenToSay} 
                        placeholder="When to Say" 
                        onChange={handleInputChange}
                        className="border border-gray-300 rounded-lg p-2"
                    />
                    <input 
                        type="number" 
                        name="lessonNo" 
                        value={newVocab.lessonNo} 
                        placeholder="Lesson No" 
                        onChange={handleInputChange}
                        className="border border-gray-300 rounded-lg p-2"
                    />
                    <input 
                        type="email" 
                        name="adminEmail" 
                        value={newVocab.adminEmail} 
                        placeholder="Admin Email" 
                        onChange={handleInputChange}
                        className="border border-gray-300 rounded-lg p-2"
                    />
                </div>
                <button 
                    onClick={handleAddVocab} 
                    className="mt-4 px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600"
                >
                    Add Vocabulary
                </button>
            </div>

            {/* Filter by Lesson No */}
            <div className="bg-white p-4 rounded-lg shadow-lg mb-8">
                <h3 className="text-xl font-semibold mb-2">Filter by Lesson No:</h3>
                <input 
                    type="number" 
                    value={filterLesson} 
                    placeholder="Lesson No" 
                    onChange={handleFilterChange}
                    className="border border-gray-300 rounded-lg p-2 w-full"
                />
            </div>

            {/* Vocabulary Table */}
            <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold mb-4">Vocabularies</h3>
                <div className="overflow-x-auto">
                    <table className="table-auto w-full">
                        <thead className="bg-gray-100">
                            <tr>
                                <th className="px-4 py-2">Word</th>
                                <th className="px-4 py-2">Meaning</th>
                                <th className="px-4 py-2">Pronunciation</th>
                                <th className="px-4 py-2">When to Say</th>
                                <th className="px-4 py-2">Lesson No</th>
                                <th className="px-4 py-2">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filteredVocabularies.map((vocab) => (
                                <tr key={vocab.id} className="border-t">
                                    <td className="px-4 py-2">{vocab.word}</td>
                                    <td className="px-4 py-2">{vocab.meaning}</td>
                                    <td className="px-4 py-2">{vocab.pronunciation}</td>
                                    <td className="px-4 py-2">{vocab.whenToSay}</td>
                                    <td className="px-4 py-2">{vocab.lessonNo}</td>
                                    <td className="px-4 py-2">
                                        <button 
                                            onClick={() => handleEditVocab(vocab.id)}
                                            className="mr-2 px-4 py-1 bg-green-500 text-white rounded-lg hover:bg-green-600"
                                        >
                                            Edit
                                        </button>
                                        <button 
                                            onClick={() => handleDeleteVocab(vocab.id)}
                                            className="px-4 py-1 bg-red-500 text-white rounded-lg hover:bg-red-600"
                                        >
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            {/* Edit Vocabulary Form */}
            {editingVocab && (
                <div className="bg-white p-6 rounded-lg shadow-lg mt-8">
                    <h3 className="text-xl font-semibold mb-4">Edit Vocabulary</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <input 
                            type="text" 
                            name="word" 
                            value={editingVocab.word} 
                            onChange={(e) => setEditingVocab({ ...editingVocab, word: e.target.value })}
                            className="border border-gray-300 rounded-lg p-2"
                        />
                        <input 
                            type="text" 
                            name="pronunciation" 
                            value={editingVocab.pronunciation} 
                            onChange={(e) => setEditingVocab({ ...editingVocab, pronunciation: e.target.value })}
                            className="border border-gray-300 rounded-lg p-2"
                        />
                        <input 
                            type="text" 
                            name="meaning" 
                            value={editingVocab.meaning} 
                            onChange={(e) => setEditingVocab({ ...editingVocab, meaning: e.target.value })}
                            className="border border-gray-300 rounded-lg p-2"
                        />
                        <input 
                            type="text" 
                            name="whenToSay" 
                            value={editingVocab.whenToSay} 
                            onChange={(e) => setEditingVocab({ ...editingVocab, whenToSay: e.target.value })}
                            className="border border-gray-300 rounded-lg p-2"
                        />
                        <input 
                            type="number" 
                            name="lessonNo" 
                            value={editingVocab.lessonNo} 
                            onChange={(e) => setEditingVocab({ ...editingVocab, lessonNo: e.target.value })}
                            className="border border-gray-300 rounded-lg p-2"
                        />
                    </div>
                    <button 
                        onClick={handleSaveEdit}
                        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
                    >
                        Save Changes
                    </button>
                </div>
            )}
        </div>
    );
};

export default ManageVocabularies;

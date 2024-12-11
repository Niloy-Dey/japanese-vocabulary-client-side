import React, { useState } from 'react';

const ManageUsers = () => {
    const [users, setUsers] = useState([
        { id: 1, name: 'John Doe', email: 'john@example.com', role: 'Normal User' },
        { id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'Admin' },
        { id: 3, name: 'Alice Johnson', email: 'alice@example.com', role: 'Normal User' },
    ]);

    const toggleRole = (id) => {
        setUsers(users.map(user => 
            user.id === id
                ? { ...user, role: user.role === 'Admin' ? 'Normal User' : 'Admin' }
                : user
        ));
    };

    return (
        <div className="container mx-auto px-4 py-8">            
            <div className="bg-white shadow-lg rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-4">All Users</h3>
                <div className="overflow-x-auto">
                    <table className="table-auto w-full">
                        <thead className="bg-gray-100">
                            <tr>
                                <th className="px-4 py-2">User Name</th>
                                <th className="px-4 py-2">Email</th>
                                <th className="px-4 py-2">Role</th>
                                <th className="px-4 py-2">Actions</th>
                            </tr>
                        </thead>
                        <tbody >
                            {users.map(user => (
                                <tr key={user.id} className="border-t">
                                    <td className="px-4  text-center py-2">{user.name}</td>
                                    <td className="px-4 text-center py-2">{user.email}</td>
                                    <td className="px-4 text-center py-2">{user.role}</td>
                                    <td className="px-4 text-center py-2">
                                        {user.role === 'Admin' ? (
                                            <button 
                                                onClick={() => toggleRole(user.id)}
                                                className="px-4 py-1 bg-red-500 text-white rounded-lg hover:bg-red-600"
                                            >
                                                Demote to Normal User
                                            </button>
                                        ) : (
                                            <button 
                                                onClick={() => toggleRole(user.id)}
                                                className="px-4 py-1 bg-green-500 text-white rounded-lg hover:bg-green-600"
                                            >
                                                Promote to Admin
                                            </button>
                                        )}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default ManageUsers;

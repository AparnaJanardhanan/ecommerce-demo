import React, { useState } from 'react';
import usersData from './credentials.json';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();

        console.log("entered login", usersData.users, username, password);
        const user = usersData.users.find((user) => user.username === username && user.password === password);
        if (user) {
            const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c';
            localStorage.setItem('token', token);
            navigate('/home');
        } else {
            alert("Invalid username or password");
        }
    };

    return (
        <div className="h-screen flex items-center justify-center bg-gradient-to-b from-gray-400 via-gray-500 to-gray-700">
            <div className="bg-opacity-50 bg-gray-400 p-8 rounded-lg shadow-lg">
                <h2 className="text-2xl text-center text-gray-900 font-bold pb-6">Login</h2>
                <div className="flex justify-center items-center">
                    <form onSubmit={handleLogin} className="w-full max-w-xs">
                        <div className="relative mb-8">
                            <input
                                type="text"
                                name="username"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                required
                                className="w-full px-3 py-2 placeholder-gray-500 text-gray-900 border-b-2 border-gray-900 focus:outline-none focus:border-red-500"
                            />
                            <label className="absolute top-0 left-0 px-3 py-2 text-gray-900 transition-transform transform -translate-y-2 scale-75">
                                Username
                            </label>
                        </div>
                        <div className="relative mb-8">
                            <input
                                type="password"
                                name="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                                className="w-full px-3 py-2 placeholder-gray-500 text-gray-900 border-b-2 border-gray-900 focus:outline-none focus:border-red-500"
                            />
                            <label className="absolute top-0 left-0 px-3 py-2 text-gray-900 transition-transform transform -translate-y-2 scale-75">
                                Password
                            </label>
                        </div>
                        <div className="relative pl-11">
                            <button
                                className="relative inline-block py-2 px-4 text-gray-900 text-lg uppercase font-semibold tracking-wide hover:bg-red-500 hover:text-white rounded-full shadow-md transition-transform transform hover:scale-105"
                            >
                                Submit
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;

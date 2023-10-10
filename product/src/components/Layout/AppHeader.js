import React, { useState } from 'react';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useNavigate } from 'react-router-dom';

const AppHeader = () => {
    const [isOpen, setIsOpen] = useState(false);
    const navigate = useNavigate();

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const handleLogout = () => {
        setIsOpen(false);
        localStorage.removeItem('token');
        navigate('/login');
    };

    return (
        <header className="bg-stone-900 text-white p-4">
            <div className='flex justify-between'>
                <span>ShopNow</span>
                <nav>
                    <ul className="flex space-x-4">
                        <li><a href="/home">Home</a></li>
                        <li><a href="/about">About</a></li>
                        <li><a href="/contact">Contact</a></li>
                        <li><button onClick={toggleDropdown}>
                            <AccountCircleIcon />
                        </button></li>
                        {isOpen && (
                            <div className="absolute right-0 text-center mt-8 w-28 h-8 bg-white rounded-lg shadow-lg">
                                <ul className="py-1">
                                    <li>
                                        <button onClick={handleLogout} className="block text-gray-800 hover:bg-gray-200 w-full">
                                            Logout
                                        </button>
                                    </li>
                                </ul>
                            </div>
                        )}
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default AppHeader;

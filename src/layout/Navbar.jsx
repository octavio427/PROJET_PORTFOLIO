// src/components/Navbar.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="bg-gray-800 p-4">
        <div className="container mx-auto flex justify-between items-center">
            <div className="text-white text-xl font-bold">
            MonSite
            </div>
            <div className="md:hidden">
            <button onClick={toggleMenu} className="text-white focus:outline-none">
                <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16m-7 6h7'}
                />
                </svg>
            </button>
            </div>
            <div className={`md:flex md:items-center ${isOpen ? 'block' : 'hidden'}`}>
            <Link to="/" className="block mt-4 md:inline-block md:mt-0 text-white mr-4">
                Accueil
            </Link>
            <Link to="/about" className="block mt-4 md:inline-block md:mt-0 text-white mr-4">
                À Propos
            </Link>
            <Link to="/contact" className="block mt-4 md:inline-block md:mt-0 text-white">
                Contact
            </Link>
            </div>
        </div>
        </nav>
    );
};

export default Navbar;

// src/components/Navbar.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="fixed top-0 left-0 w-full z-50 bg-white shadow-md"> 
        <div className="container mx-auto bg-[#00000] justify-between items-center">
            <div className="text-white text-xl font-bold">
                MonSite
            </div>
            <div className="md:hidden">
            <button onClick={toggleMenu} className="text-white focus:outline-none">
                <svg
                className="w-8 h-8"
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
            <Link to="/home" className="block mt-4 md:inline-block md:mt-0 text-white mr-4">
                Home
            </Link>
            <Link to="/about" className="block mt-4 md:inline-block md:mt-0 text-white mr-4">
                À Propos
            </Link>
            <Link to="/contact" className="block mt-4 md:inline-block md:mt-0 text-white">
                Contact
            </Link>
            <Link to="/All_Projet" className="block mt-4 md:inline-block md:mt-0 text-white">
                All_Projet
            </Link>
            <Link to="/Projet_1" className="block mt-4 md:inline-block md:mt-0 text-white">
                Projet_1
            </Link>

            </div>
        </div>
        </nav>
    );
};

export default Navbar;

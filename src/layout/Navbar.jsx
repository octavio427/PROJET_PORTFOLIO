import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

export default function Navbar  ()  {
    const [isOpen, setIsOpen] = useState(false);
    const menuRef = useRef(null);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const closeMenu = () => {
        setIsOpen(false);
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                closeMenu();
            }
        };

        document.addEventListener('click', handleClickOutside);
        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, []);

    return (
        <nav style={{position: 'fixed', top: 0, left: 0, width: '100%', backgroundColor: 'black', color: 'white', display: 'flex', justifyContent: 'space-between', alignItems: 'center', zIndex: 50}}>
            {/* Nom aligné à gauche */}
            {/* <p style={{fontSize: '1.225rem', fontWeight: 'bold', marginLeft:'20px'}}>KALI.</p> */}
            <p style={{fontSize: '1.225rem', fontWeight: 'bold', marginLeft:'20px'}}>
                <a href="/home" style={{textDecoration: 'none', color: 'inherit'}}>KALI.</a>
            </p>
            {/* Icône Menu Burger alignée à droite */}
            <div style={{position: 'relative', cursor: 'pointer', marginRight:'20px'}} onClick={toggleMenu} ref={menuRef}>
                <svg className="w-8 h-8 text-gray-800 dark:text-white " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                    <path stroke="currentColor" strokeLinecap="round" strokeWidth="2" d="M5 7h14M5 12h14M5 17h14"/>
                </svg>

                {/* Menu déroulant */}
                {isOpen && (
                    <div className="navbar-menu" style={{position: 'absolute', right: 0, marginTop: '8px', width: '12rem', backgroundColor: 'gray', color: 'white', borderRadius: '0.375rem', boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)', padding: '8px 0', display: 'flex', flexDirection: 'column'}}>
                        <Link 
                            to="/" 
                            style={{padding: '8px 16px', display: 'block', color: 'white', textDecoration: 'none'}}
                            onMouseEnter={(e) => e.target.style.backgroundColor = 'black'}
                            onMouseLeave={(e) => e.target.style.backgroundColor = 'gray'}
                        >Accueil
                        </Link>
                        <Link 
                            to="/home" 
                            style={{padding: '8px 16px', display: 'block', color: 'white', textDecoration: 'none'}}
                            onMouseEnter={(e) => e.target.style.backgroundColor = 'black'}
                            onMouseLeave={(e) => e.target.style.backgroundColor = 'gray'}
                        >Home
                        </Link>
                        <Link 
                            to="/all_projet" 
                            style={{padding: '8px 16px', display: 'block', color: 'white', textDecoration: 'none'}}
                            onMouseEnter={(e) => e.target.style.backgroundColor = 'black'}
                            onMouseLeave={(e) => e.target.style.backgroundColor = 'gray'}
                        >All Projects
                        </Link>
                        <Link 
                            to="/projet_1" 
                            style={{padding: '8px 16px', display: 'block', color: 'white', textDecoration: 'none'}}
                            onMouseEnter={(e) => e.target.style.backgroundColor = 'black'}
                            onMouseLeave={(e) => e.target.style.backgroundColor = 'gray'}
                        >Projet 1
                        </Link>
                        <Link 
                            to="/projet_2" 
                            style={{padding: '8px 16px', display: 'block', color: 'white', textDecoration: 'none'}}
                            onMouseEnter={(e) => e.target.style.backgroundColor = 'black'}
                            onMouseLeave={(e) => e.target.style.backgroundColor = 'gray'}
                        >Projet 2
                        </Link>
                        <Link 
                            to="/questionnaire/client" 
                            style={{padding: '8px 16px', display: 'block', color: 'white', textDecoration: 'none'}}
                            onMouseEnter={(e) => e.target.style.backgroundColor = 'black'}
                            onMouseLeave={(e) => e.target.style.backgroundColor = 'gray'}
                        >Questionnaire
                        </Link>

                        <Link 
                            to="/contact" 
                            style={{padding: '8px 16px', display: 'block', color: 'white', textDecoration: 'none'}}
                            onMouseEnter={(e) => e.target.style.backgroundColor = 'black'}
                            onMouseLeave={(e) => e.target.style.backgroundColor = 'gray'}
                        >Contact
                        </Link>
                        <Link 
                            to="/about" 
                            style={{padding: '8px 16px', display: 'block', color: 'white', textDecoration: 'none'}}
                            onMouseEnter={(e) => e.target.style.backgroundColor = 'black'}
                            onMouseLeave={(e) => e.target.style.backgroundColor = 'gray'}
                        >About
                        </Link>
                    </div>
                )}
            </div>
        </nav>
    );
};


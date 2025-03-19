
import React from 'react';
// import Navbar from './Navbar';

const PageWrapper = ({ children, showNavbar = true }) => {
    return (
        <div>
            {showNavbar && <Navbar />}
            <div className={showNavbar ? "pt-16" : ""}> 
                {children}
            </div>
        </div>
    );
};

export default PageWrapper;

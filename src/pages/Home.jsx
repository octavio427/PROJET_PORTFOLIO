import React from 'react';
import '../App.css';
import '../index.css';

import Navbar from '../layout/Navbar';
import Footer from '../layout/Footer';
import BackgroundVideo from '../assets/VideoPage/etoiles.mp4';

function Accueil() {
    return (
        <div className="flex flex-col min-h-screen">
            {/* Barre de navigation collée en haut, prenant toute la largeur */}
            <div className="w-full">
                <Navbar />
            </div>

            {/* Contenu principal avec vidéo de fond, prenant toute la largeur */}
            <div className="flex-grow relative w-full">
                <video
                    className="background-video object-cover z-0"
                    src={BackgroundVideo}
                    autoPlay
                    loop
                    muted
                ></video>
                <div className="relative z-10 flex flex-col items-center justify-center h-full bg-gray-900 bg-opacity-50">
                    <h1 className="text-white text-4xl font-bold">
                        Bienvenue !
                    </h1>
                </div>
            </div>

            {/* Pied de page collé en bas, prenant toute la largeur */}
            <div className="flex-auto w-full">
                <Footer />
            </div>
        </div>
    );
}

export default Accueil;

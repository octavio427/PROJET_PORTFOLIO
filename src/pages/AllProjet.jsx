import React from 'react';
// import '../App.css'; // Assurez-vous d'inclure votre fichier CSS si nécessaire

// import Navbar from '../layout/Navbar';
// import Footer from '../layout/Footer';
// import BackgroundVideo from '../assets/VideoPage/etoiles.mp4';

export default function AllProjet() {
    return (
        <div className="flex flex-col min-h-screen">
            

            {/* Contenu principal */}
            <main className="flex-grow flex items-center justify-center text-center relative z-20">
                <div className="text-white">
                    <h1 className="text-6xl font-bold mb-4">Bienvenue sur mes projet</h1>
                    <p className="text-xl">Découvrez mes projets et compétences.</p>
                </div>
            </main>

        </div>
    );
}


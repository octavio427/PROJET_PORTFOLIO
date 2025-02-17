import React, { useState } from 'react';
import './App.css';
import './index.css';
import Image from './assets/images/main_pointeur.png';
import Video from './assets/VideoPage/video_portfolio.mp4';
import BackgroundVideo from './assets/VideoPage/etoiles.mp4';

function Accueil() {
    const [isVideoPlaying, setIsVideoPlaying] = useState(false);

    const handleStart = () => {
        const videoElement = document.createElement('video'); // Création d'une balise vidéo
        videoElement.src = Video;
        videoElement.style.position = 'fixed';
        videoElement.style.top = '0';
        videoElement.style.left = '0';
        videoElement.style.width = '100vw';
        videoElement.style.height = '100vh';
        videoElement.style.objectFit = 'cover';
        videoElement.style.zIndex = '9999'; // Au-dessus de tout
        videoElement.autoplay = true;
        videoElement.muted = true; // Nécessaire pour éviter le blocage de lecture automatique
        videoElement.playsInline = true;
        
        // Ajout au DOM temporairement
        document.body.appendChild(videoElement);
        
        // Lecture de la vidéo
        videoElement.play().then(() => {
            videoElement.muted = false; // Active le son après le démarrage
        }).catch(error => console.error("Erreur de lecture :", error));

        // Mode plein écran
        if (videoElement.requestFullscreen) {
            videoElement.requestFullscreen();
        } else if (videoElement.mozRequestFullScreen) { /* Firefox */
            videoElement.mozRequestFullScreen();
        } else if (videoElement.webkitRequestFullscreen) { /* Chrome, Safari et Opera */
            videoElement.webkitRequestFullscreen();
        } else if (videoElement.msRequestFullscreen) { /* IE/Edge */
            videoElement.msRequestFullscreen();
        }

        setIsVideoPlaying(true);

        // Supprimer la vidéo et rediriger après 19s
        setTimeout(() => {
            videoElement.remove(); // Supprime la vidéo du DOM
            window.location.href = './Home';
        }, 19000); // Durée totale de la vidéo
    };

    const handleHomeRedirect = () => {
        window.location.href = './Home';
    };

    return (
        <div className={`flex flex-col items-center justify-center min-h-screen bg-gray-100 ${isVideoPlaying ? 'video-playing' : ''}`}>
            {/* Vidéo de fond */}
            <video className="background-video absolute top-0 left-0 w-full h-full object-cover" src={BackgroundVideo} autoPlay loop muted></video>
    
            <div className="relative z-10 flex flex-col mt-50 items-center justify-center text-center h-full">
                {!isVideoPlaying && (
                    <>
                        <h2 className="text-6xl text-white-50 font-bold mb-2" style={{ fontSize: '3rem' }}>
                            Bienvenue !
                        </h2>
                        <h1 className="text-3xl text-white font-bold mb-2">
                            Sur mon portfolio développeur web
                        </h1>
                        <h3 className="text-xl mb-4" style={{ fontSize: '2rem' }}>
                            L’aventure commence
                        </h3>
                        <img 
                            src={Image}
                            alt="Doigt pointant vers le bas" 
                            className="mb-4"
                            style={{ width: '10%', height: 'auto' }}
                        />
                        <div className="flex flex-col w-full gap-5" style={{ flexDirection: 'column' }}>
                            <button
                                onClick={handleStart}
                                className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400">
                                START
                            </button>
                            <button
                                onClick={handleHomeRedirect}
                                className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-400">
                                Passez l’intro
                            </button>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
}

export default Accueil;

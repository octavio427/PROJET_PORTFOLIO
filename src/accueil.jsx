import React, { useState } from 'react';
import './App.css';
import './index.css';
import Image from './assets/images/main_pointeur.png';
import Video from './assets/VideoPage/video_portfolio.mp4';
import BackgroundVideo from './assets/VideoPage/etoiles.mp4';

// import BackgroundVideo from './components/BackgroundVideo';

function Accueil() {
    const [isVideoPlaying, setIsVideoPlaying] = useState(false);

    const handleStart = () => {
        const videoElement = document.getElementById('video');
        if (videoElement) {
            // Mettre la vidéo en plein écran lors de la lecture
            if (videoElement.requestFullscreen) {
                videoElement.requestFullscreen();
            } else if (videoElement.mozRequestFullScreen) { /* Firefox */
                videoElement.mozRequestFullScreen();
            } else if (videoElement.webkitRequestFullscreen) { /* Chrome, Safari and Opera */
                videoElement.webkitRequestFullscreen();
            } else if (videoElement.msRequestFullscreen) { /* IE/Edge */
                videoElement.msRequestFullscreen();
            }

            videoElement.muted = false;
            videoElement.play();  // Démarrer la vidéo
            setIsVideoPlaying(true); // Mettre à jour l'état pour indiquer que la vidéo est en lecture
        } else {
            console.error("L'élément vidéo n'a pas été trouvé.");
        }

        setTimeout(() => {
            window.location.href = './Home';
        }, 20000); // Durée du fondu (19000 ms = 19 secondes)
    };

    const handleHomeRedirect = () => {
        window.location.href = './Home';
    };

    return (
        <div className={`flex flex-col items-center justify-center min-h-screen bg-gray-100 ${isVideoPlaying ? 'video-playing' : ''}`}>
            {/* Vidéo de fond */}
            <video
                className="background-video"
                src={BackgroundVideo}
                autoPlay
                loop
                muted
            ></video>
            {/* <BackgroundVideo /> */}

            <div className="relative z-10 flex items-center justify-center h-full">
                <h1 className="text-white-50 text-4xl font-bold">
                    Bienvenue !
                </h1>
            </div>
            <video
                id="video"
                src={Video}
                className={`mb-4 ${isVideoPlaying ? 'video-fullscreen' : ''}`}
                style={{ width: '70%', height: 'auto' }}
                muted
                autoPlay={false} // Empêcher la lecture automatique initiale
            ></video>
            {!isVideoPlaying && (
                <>
                    <h1 className="text-3xl text-white font-bold mb-2">
                        sur mon portfolio développeur web
                    </h1>
                    <h2 className="text-xl mb-4">
                        L’aventure commence
                    </h2>
                    <img 
                        src={Image}
                        alt="Doigt pointant vers le bas" 
                        className="mb-4 " // Ajustez la taille de l'image
                        style={{ width: '10%', height: 'auto' }}
                    />
                    <div className="flex flex-col gap-5 ">
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
    );
}

export default Accueil;

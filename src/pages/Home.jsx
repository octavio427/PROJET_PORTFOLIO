import React, { useState } from 'react';
import '../App.css';
import '../index.css';


import BackgroundVideo from '../assets/VideoPage/etoiles.mp4';

// import BackgroundVideo from './components/BackgroundVideo';

function Accueil() {
    

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
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
            
            
                <>
                    <h1 className="text-3xl text-black font-bold mb-2">
                        sur mon portfolio développeur web
                    </h1>
                    {/* <h2 className="text-xl mb-4">
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
                    </div> */}
                </>
           
        </div>
    );
}

export default Accueil;

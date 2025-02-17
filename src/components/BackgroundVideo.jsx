import React from 'react';
import { useState } from 'react';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
// import BackgroundVideo from '../pages/assets/VideoPage/etoiles.mp4';

import BackgroundVideo from '../assets/VideoPage/etoiles.mp4';

const BackgroundVideo = () => {
    return (
        <div className="relative h-screen w-full overflow-hidden">
            <video
                className="background-video"
                src={BackgroundVideo}
                autoPlay
                loop
                muted
            ></video>

            {/* <video
                className="absolute top-0 left-0 w-full h-full object-cover"
                // src="../../pages/assets/VideoPage/etoiles.mp4"
                src="https://www.w3schools.com/html/mov_bbb.mp4" 
                autoPlay
                loop
                muted
            ></video> */}
            {/* <div className="relative z-10 flex items-center justify-center h-full">
                <h1 className="text-white text-4xl font-bold">Bienvenue!</h1>
            </div> */}
        </div>
    );
};

export default BackgroundVideo;

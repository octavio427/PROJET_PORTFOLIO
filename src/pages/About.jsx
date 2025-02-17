
import React from 'react';
import BackgroundVideo from '../assets/VideoPage/etoiles.mp4';

const About = () => {
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
            <h1 className="text-4xl text-gray-800">
                À Propos
            </h1>
            <p className="text-lg text-gray-600">
                Voici des informations à propos de notre site...
            </p>
        </div>
    );
};

export default About;

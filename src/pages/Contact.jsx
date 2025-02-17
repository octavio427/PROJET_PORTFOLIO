
import React from 'react';
import BackgroundVideo from '../assets/VideoPage/etoiles.mp4';

const Contact = () => {
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
                Contact
            </h1>
            <p className="text-lg text-gray-600">
                Contactez-nous à cette adresse...
            </p>
        </div>
    );
};

export default Contact;

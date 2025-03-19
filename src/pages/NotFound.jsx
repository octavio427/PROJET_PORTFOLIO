// export default function NotFound ()  {
//     return (
//         <div className="bg">
//             <h1>Erreur 404</h1>
//         </div>
//         );
//     };
    

import React from 'react';
import V404 from '../assets/VideoPage/V404.mp4'; 

export default function NotFound() {
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-900 text-white">
            <div className="text-center">
                <h1 className="text-4xl font-bold mb-4">404 - Page Non Trouvée</h1>
                <div className="relative overflow-hidden">
                    <video
                        className="w-auto h-auto max-w-full max-h-full"
                        style={{ width: '400px', height: '300px' }} // Modifie ces valeurs pour redimensionner
                        autoPlay
                        loop
                        muted
                        playsInline
                    >
                        <source 
                            src={V404} 
                            type="video/mp4" />
                        Votre navigateur ne prend pas en charge la lecture vidéo.
                    </video>
                </div>
                <p className="mt-4 text-white">Désolé, la page que vous recherchez n'existe pas ou a été déplacée.</p>
                <a
                    href="/"
                    className="mt-4 inline-block px-6 py-2 text-sm font-semibold bg-blue-600 hover:bg-blue-700 text-white rounded"
                >
                    Retour à l'accueil
                </a>
            </div>
        </div>
    );
};



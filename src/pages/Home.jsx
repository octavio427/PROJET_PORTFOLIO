// import React from 'react';

// import BackgroundVideo from '../assets/VideoPage/etoiles.mp4';


// 
import { useState, useEffect } from "react";

export default function Home() {
    const [portfolioItems, setPortfolioItems] = useState([]);
    const [homeData, setHomeData] = useState(null);

    useEffect(() => {
        // Récupérer les données du portfolio
        fetch("http://localhost:5000/api/portfolio") // ✅ Correction URL
            .then((response) => response.json())
            .then((data) => setPortfolioItems(data));

        // Récupérer les données de la page d'accueil
        fetch("http://localhost:5000/api/home") // ✅ Correction URL
            .then((response) => response.json())
            .then((data) => setHomeData(data));
    }, []);

    return (
        <div className="container mx-auto px-4">
            {/* Banner */}
            {homeData && (
                <div className="relative w-full h-96 flex items-center justify-center text-center bg-cover bg-center"
                    style={{ backgroundImage: `url(http://localhost:5000${homeData.banner.image})` }}>
                    <div className="bg-black bg-opacity-50 p-8 rounded-lg">
                        <h1 className="text-4xl font-bold text-white">{homeData.banner.title}</h1>
                        <p className="text-lg text-gray-300 mt-2">{homeData.banner.subtitle}</p>
                    </div>
                </div>
            )}

            {/* Portfolio Items */}
            <div className="flex justify-center">
                <div className="w-full lg:w-10/12">
                    <div className="pt-24 pb-40">
                        <ul className="flex flex-col space-y-6 text-white">
                            {portfolioItems.map((item, index) => (
                                <li key={index} className="relative group">
                                    <img
                                        className="w-full h-auto transform scale-100 group-hover:scale-105 transition-transform duration-300 ease-in-out"
                                        src={`http://localhost:5000${item.img}`}
                                        alt={item.title}
                                    />
                                    <a href={item.link} className="text-3xl font-bold block mt-4">
                                        {item.title}
                                    </a>
                                    <p className="text-lg text-gray-400">{item.subtitle}</p>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* About Section */}
                    {homeData && (
                        <div className="flex flex-col lg:flex-row items-center mt-16">
                            <img className="w-full lg:w-1/2 rounded-lg" src={`http://localhost:5000${homeData.about.image}`} alt="About Us" />
                            <div className="lg:ml-8 text-white">
                                <h2 className="text-3xl font-bold">{homeData.about.title}</h2>
                                <p className="text-lg text-gray-300 mt-4">{homeData.about.description}</p>
                            </div>
                        </div>
                    )}

                    {/* Call to Action */}
                    <div className="mt-8 pb-24 relative">
                        <h3 className="text-white text-2xl mb-6">
                            Do you have a project? <br /> Send us a message and let's connect 👋
                        </h3>
                        <a
                            href="/contact2"
                            className="relative px-6 py-3 bg-white text-black font-semibold rounded-full overflow-hidden group hover:text-white"
                            >
                            let’s work
                            <span className="absolute inset-0 bg-black scale-0 group-hover:scale-100 transition-transform duration-300"></span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

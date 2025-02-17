import React, { useState } from 'react';

export default function Footer() {
    return (
        <footer className=" w-full bg-black text-white py-6 mt-auto text-sm">
            <div className="container mx-auto flex justify-between px-4">
                <div className="flex flex-col space-y-4">
                    <h2 className="text-xl font-bold">
                        Contactez-nous
                    </h2>
                    <p>Kali</p>
                    <p>reservation@contact.com</p>
                </div>
            
                <div className="flex flex-col space-y-4">
                    <h2 className="text-xl font-bold">
                        Suivez-nous
                    </h2>
                    <button className="bg-white text-black border border-gray-300 py-2 px-4 rounded-md">
                        Contact
                    </button>
                </div>
            </div>
            <br/>
            <div className="text-center mt-4 text-xs">
                Kali ©2025. Tous droits réservés. MENTIONS LÉGALES POLITIQUES DE CONFIDENTIALITÉ
            </div>  
        </footer>
    );
}


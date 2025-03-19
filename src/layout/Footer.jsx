import React from 'react';

export default function Footer() {
    return (
        <footer style={{ 
            position: 'fixed', 
            bottom: 0, 
            left: 0, 
            width: '100%', 
            backgroundColor: 'black', 
            color: 'white', 
            display: 'flex', 
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'space-between',
            zIndex: 50,
            // padding: '10px 0'
            }}> 

            <div style={{ 
                width: '80%', 
                display: 'flex', 
                justifyContent: 'space-between', 
                padding: '0 20px' 
                }}>
                <div style={{ 
                    // display: 'flex', 
                    flexDirection: 'column' 
                    }}>
                    <p style={{ 
                        fontSize: '1.25rem', 
                        fontWeight: 'bold' 
                        }}>
                        Contactez-nous
                    </p>
                    {/* <p>Kali</p> */}
                    <a href="#" style={{ color: 'white', textDecoration: 'none', margin: '0 5px' }}>
                        reservation@contact.com
                    </a>
                    {/* <p>reservation@contact.com</p> */}
                </div>

                <div style={{ 
                    display: 'flex', 
                    flexDirection: 'column', 
                    alignItems: 'flex-end' 
                    }}>
                    <p style={{ 
                        fontSize: '1.25rem', 
                        fontWeight: 'bold' 
                        }}>
                        Suivez-nous
                    </p>
                    <button style={{ 
                        backgroundColor: 'white', 
                        color: 'black', 
                        border: '1px solid #d1d5db', 
                        padding: '8px 16px', 
                        borderRadius: '8px' 
                        }}>
                        Contact
                    </button>
                </div>
            </div>
            <div style={{ 
                textAlign: 'center', 
                marginTop: '10px',
                marginBottom:'10px', 
                fontSize: '0.75rem', 
                width: '100%'
                }}>
                Kali ©2025. Tous droits réservés. 
                <a href="/mentions-legales" style={{ color: 'white', textDecoration: 'none', margin: '0 5px' }}>
                    MENTIONS LÉGALES
                </a>
                <a href="/politique-de-confidentialite" style={{ color: 'white', textDecoration: 'none', margin: '0 5px' }}>
                    POLITIQUES DE CONFIDENTIALITÉ
                </a>
            </div>
        </footer>
    );
}

import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';

import Navbar from './layout/Navbar';
import Footer from './layout/Footer';
import NotFound from './pages/NotFound';

import Accueil from './Accueil';
import Home from './pages/Home';
import AllProjet from './pages/AllProjet';
import ProjetOne from './pages/ProjetOne';
import ProjetTwo from './pages/ProjetTwo';
import Questionnaire from './pages/Questionnaire';
import Contact from './pages/Contact';
import About from './pages/About';

import BackgroundVideo from './components/BackgroundVideo';

function AppContent() {
  const location = useLocation();

  // Ajout des chemins pour cacher le footer et la barre de navigation
  const hideNavFooter = location.pathname === '/';

  return (
    <div>
      {!hideNavFooter && (
        <nav className="w-full fixed top-0 left-0 z-10">
          <Navbar />
        </nav>
      )}
      <BackgroundVideo />
      <div className="pt-16">
        <div className="flex min-h-screen">
          <main className="flex-grow">
            <Routes>
              <Route index element={<Accueil />} />
              <Route path="/home" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/all_projet" element={<AllProjet />} />
              <Route path="/projet_1" element={<ProjetOne />} />
              <Route path="/projet_2" element={<ProjetTwo />} />
              <Route path="/questionnaire/client" element={<Questionnaire />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
        </div>
      </div>
      {!hideNavFooter && (
        <footer className="w-full fixed bottom-0 left-0 z-10">
          <Footer />
        </footer>
      )}
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;

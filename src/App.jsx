import { useState } from 'react';
import './App.css';
import './index.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Navbar from './layout/Navbar';
import Accueil from "./accueil";
import Home from "./pages/Home";
import About from './pages/About';
import Contact from './pages/contact';
// import VideoBackgroundPage from './VideoBackgroundPage';

function App() {
  const [count, setCount] = useState(0);

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Accueil />} /> 
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        {/* <Route path="/pages/VideoPage" element={<VideoBackgroundPage />} /> */}
      </Routes>
    </Router>
  );
}

export default App;

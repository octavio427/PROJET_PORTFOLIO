import { useState } from 'react';
import './App.css';
import './index.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// import Navbar from './layout/Navbar';
import Accueil from "./accueil";
import Home from "./pages/Home";
import About from './pages/About';
import Contact from './pages/contact';
// import AllProjet from './pages/All_Projet';
// import Projet from './pages/Projet_1';
// import Footer from "./layout/Footer";
// import VideoBackgroundPage from './VideoBackgroundPage';

function App() {
  const [count, setCount] = useState(0);

  return (


  <Router>
    {/* <div className="App"> */}
      {/* <Navbar /> */}
    <div className="pt-16">
      <div className="flex  min-h-screen">         
        <main className="flex-0">        
          <Routes>
            <Route path="/" element={<Accueil />} /> 
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            {/* <Route path="/All_Projet" element={<AllProjet />} /> */}
            {/* <Route path="/Projet" element={<Projet />} /> */}

            {/* <Route path="/pages/VideoPage" element={<VideoBackgroundPage />} /> */}
          </Routes>
        </main>
      </div>
    </div>
    
    {/* <div className="flex-auto">
      <Footer />
    </div> */}
</Router>

  );
}

export default App;

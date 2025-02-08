import { useState } from 'react';
import './App.css';
import './index.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Accueil from "./Accueil";
// import Home from "./pages/Home";
// import VideoBackgroundPage from './VideoBackgroundPage';

function App() {
  const [count, setCount] = useState(0);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Accueil />} /> 
        {/* <Route path="/home" element={<Home />} /> */}
        {/* <Route path="/pages/VideoPage" element={<VideoBackgroundPage />} /> */}
      </Routes>
    </Router>
  );
}

export default App;

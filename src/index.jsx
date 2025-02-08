import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import VideoBackgroundPage from './VideoBackgroundPage';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <App />
        <VideoBackgroundPage />
    </React.StrictMode>,
    // document.getElementById('root')
);
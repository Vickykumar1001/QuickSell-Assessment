import React from 'react';
import './loader.css';

function Loader({ fullscreen }) {
    return (
        <div className={`loader-wrapper ${fullscreen ? "fullscreen" : ""}`}>
            <div className="spinner"></div>
            <div className="loader-text">Loading...</div>
        </div>
    );
}

export default Loader;

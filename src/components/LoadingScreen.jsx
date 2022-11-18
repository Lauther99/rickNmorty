import React from 'react';
import '../assets/style/videoFormat.css'

const LoadingScreen = () => {
    return (
        <div className='video-container'>
            <video muted autoPlay loop src="https://thumbs.gfycat.com/AlarmedInsistentGrayreefshark-mobile.mp4">
            </video>
            <div className="layer"></div>
            <div className='loading-text'>Loading ...</div>

        </div>

    );
};

export default LoadingScreen;
import React from 'react';
import '../assets/style/header.css'

const Header = () => {
    return (
        <div className='principal-container'>
            <div className='title-container'>
                <div className="nav-container">
                    <span>R</span>
                    <span>I</span>
                    <span>C</span>
                    <span>K</span>
                </div>
                <div className="nav-container">
                    <span>A</span>
                    <span>N</span>
                    <span>D</span>
                </div>
                <div className="nav-container">
                    <span>M</span>
                    <span>O</span>
                    <span>R</span>
                    <span>T</span>
                    <span>Y</span>
                </div>
            </div>
            <div className='gif-containers'>
                <div className="gif-card first"></div>
                <div className="gif-card second"></div>
                <div className="gif-card third"></div>
                <div className="gif-card fourth"></div>
            </div>
        </div>
    );
};

export default Header;
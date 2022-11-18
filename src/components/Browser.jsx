import React, { useEffect, useState } from 'react';
import '../assets/style/browser.css'
import useApi from '../hooks/useApi';
import useRandom from '../hooks/useRandom';
import Card from './Card';

const Browser = () => {
    const [randomLocation] = useRandom(126, 0)
    const [location, getLocation] = useApi(randomLocation)
    const [inputLocation, setInputLocation] = useState('')

    const searchLocation = () => {
        getLocation(inputLocation)
        setInputLocation('')
    }

    const [userScroll, setUserScroll] = useState(228);
    const [browserStyle, setBrowserStyle] = useState({ top: '15rem' })


    window.onscroll = function () {
        let actualScroll = window.pageYOffset;
        if (actualScroll <= 228){
            setBrowserStyle({ top: '15rem' })
        } else if (userScroll > actualScroll) {
            setBrowserStyle({ top: '1rem' })
            setUserScroll(actualScroll)
        } else {
            setBrowserStyle({ top: '-200px' })
            setUserScroll(actualScroll)
        };
    }

    return (
        <div className='main-div'>
            <div className='browser-div' style={browserStyle}>
                <div className='info-dimension'>
                    <h1>{location.name}</h1>
                    <div className='feature feature-shine'>
                        <h2>Type:</h2>
                        <h3>{location.type}</h3>
                    </div>
                    <div className='feature feature-shine'>
                        <h2>Dimension:</h2>
                        <h3>{location.dimension}</h3>
                    </div>
                    <div className='feature feature-shine'>
                        <h2>Demography:</h2>
                        <h3>{location.residents?.length}</h3>
                    </div>
                </div>
                <div className='search-div'>
                    <input type="text"
                        placeholder='Dimension ID'
                        onChange={(e) => setInputLocation(e.target.value)}
                        value={inputLocation} />
                    <button className='search-btn' onClick={searchLocation}>
                        <i className="fa-solid fa-magnifying-glass fa-xl fa-spin"></i>
                    </button>
                </div>
            </div>
            <Card location={location} />
        </div>
    );
};

export default Browser;
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import '../assets/style/card.css'
import skull from '../assets/images/rickskull.png'
import decoration from '../assets/images/decoration.png'

const CardItem = ({ url }) => {
    const [resident, setResident] = useState({})

    useEffect(() => {
        axios.get(url)
            .then(res => setResident(res.data))
    }, [])

    const deadScreen = (status) => {
        if (status?.toLowerCase() === 'dead') {
            return (
                <div className='dead' >
                    <img src={skull} alt="" />
                    <h1>Gone</h1>
                </div>)
        }
    }

    console.log(resident);
    return (
        <li>
            <div className='card'>
                <div className='front'>
                    <h2>{resident.name}</h2>
                    {deadScreen(resident.status)}
                    <div className='img-front' style={{ backgroundImage: `url(${resident.image})` }}></div>
                </div>
                <div className='back'>
                    <h2>{resident.name}</h2>
                    <h3>Specie <i className="fa-solid fa-angles-right"></i>
                        <span> {resident.species}</span>
                    </h3>
                    <h3> <span>{resident.origin?.name}</span> <i className="fa-solid fa-angles-left"></i> Origin </h3>
                    <h3>Aparitions <i className="fa-solid fa-angles-right"></i> <span>{resident.episode?.length}</span></h3>
                    <h3><span>{resident.status}</span></h3>
                    <img className='decoration-bottom' src={decoration} alt="" />
                    <img className='decoration-top' src={decoration} alt="" />
                </div>
            </div>
        </li>
    );
};

export default CardItem;
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Coins.css';

const Coin = ({coin}) => {
    const {id, name, symbol, image} = coin;

    const navigate = useNavigate();
    const handleCoin = () =>{
        const path = `/coin/${id}`
        navigate(path)
    }
    return (
        <div onClick={handleCoin} className='coins-all'>
            <div className='coins-image'>
                <img src={image} alt="" />
            </div>
            <div className='coins-details'>
                <h5>{name}</h5>
                <p><small>{symbol}</small></p>
            </div>
        </div>
    );
};

export default Coin;
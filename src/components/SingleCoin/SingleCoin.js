import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const SingleCoin = () => {
    const {coinId} = useParams();
    const [coin, setCoin] = useState({});
    useEffect( () =>{
        const url = `https://api.coingecko.com/api/v3/coins/${coinId}`
        fetch(url)
        .then(res => res.json())
        .then(data => setCoin(data))
    }, [])
    return (
        <div>
            <h1>General Info:</h1>
            <p>Coin Name: {coin.name}</p>
            <p>Market Cap Rank: {coin.market_cap_rank}</p>
        </div>
    );
};

export default SingleCoin;
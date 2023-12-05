import React from 'react';

const CoinList = ({ coins }) => (
    <div className="coins-display">
        {coins.map((coin, index) => (
            <div key={index} className="coins-display-coin slit-in-vertical">
                {coin}
            </div>
        ))}
    </div>
);

export default CoinList;
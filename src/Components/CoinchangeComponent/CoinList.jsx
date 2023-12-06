import React from 'react';

const CoinList = ({ coins }) => (
    <div className="flex flex-wrap justify-center gap-4">
        {coins.map((coin, index) => (
            <div key={index} className="bg-yellow-300 border-4 border-gold text-center rounded-full h-16 w-16 p-2 text-black font-bold cursor-pointer transition-transform duration-200 ease-in-out hover:scale-110 hover:shadow-md">
                {coin}
            </div>
        ))}
    </div>
);

export default CoinList;
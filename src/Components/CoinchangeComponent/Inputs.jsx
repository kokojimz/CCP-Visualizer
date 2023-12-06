import React from 'react';

const Inputs = ({ amount, setAmount, coinInput, setCoinInput, error }) => (
    <div className="flex-row">
        <div className="mr-4">
            <div className='text-[#00df9a] text-[25px] font-bold p-2'>Total Amount</div>
            <input
                className="p-4 mb-4 outline-none rounded border border-gray-300 shadow-md w-full max-w-md"
                type="number"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
            />
        </div>
        <div className="mr-4">
            <div className='text-[#00df9a] text-[25px] font-bold p-2'>Coin</div>
                <input
                    className="p-4 mb-4 outline-none rounded border border-gray-300 shadow-md w-full max-w-md"
                    type="text"
                    value={coinInput}
                    onChange={(e) => setCoinInput(e.target.value)}
                />
            {error && <div className="error-message">{error}</div>}
        </div>
    </div>
);

export default Inputs;
import React from 'react';

const Inputs = ({ amount, setAmount, coinInput, setCoinInput, error }) => (
    <div className="flex-row">
        <div className="input-container">
            <div>Total Amount</div>
            <input
                className="text-box"
                type="number"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
            />
        </div>
        <div className="input-container">
            <div>Coin</div>
                <input
                    className="text-box"
                    type="text"
                    value={coinInput}
                    onChange={(e) => setCoinInput(e.target.value)}
                />
            {error && <div className="error-message">{error}</div>}
        </div>
    </div>
);

export default Inputs;
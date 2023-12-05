import React from 'react';

const CombinationDisplay = ({ combinations }) => (
    <div className="step-display-container">
        {combinations.map((combination, index) => (
            <div key={index} className="step-display-row">
                <div className="step-display slit-in-vertical">
                    {`${combination.join(", ")}`}
                </div>
            </div>
        ))}
    </div>
);

export default CombinationDisplay;
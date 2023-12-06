import React from 'react';

const CombinationDisplay = ({ combinations }) => (
    <div className="block w-full overflow-x-auto p-4 mt-4">
        {combinations.map((combination, index) => (
            <div key={index} className="flex flex-nowrap gap-2 overflow-x-auto mb-2">
                <div className="inline-flex items-center justify-center bg-gray-200 rounded p-4 min-w-12 whitespace-nowrap shadow-md mr-2 text-sm slit-in-vertical">
                    {`${combination.join(", ")}`}
                </div>
            </div>
        ))}
    </div>
);

export default CombinationDisplay;
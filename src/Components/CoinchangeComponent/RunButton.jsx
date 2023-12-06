import React from 'react';

const RunButton = ({ onClick }) => (
    <button className="py-3 px-6 bg-green-600 text-white rounded cursor-pointer transition-background duration-300 ease-in-out font-bold text-xl hover:bg-green-700 hover:shadow-md" onClick={onClick}>
        Run
    </button>
);

export default RunButton;
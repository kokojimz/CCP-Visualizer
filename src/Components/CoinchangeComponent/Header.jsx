import React from 'react';

const Header = ({ children }) => (
    <div className="bg-white shadow-inset 0 4px 7px 1px #ffffff, inset 0 -5px 20px rgba(173, 186, 204, 0.25), 0 2px 6px rgba(0, 21, 64, 0.14), 0 10px 20px rgba(0, 21, 64, 0.05) py-5 px-10% margin-bottom: 20px">
        {children}
    </div>
);

export default Header;
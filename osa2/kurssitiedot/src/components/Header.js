import React from 'react';

const Header = ({ name }) => {
    return (
        <div className='header'>
            <h1>{name}</h1>
        </div>
    );
};

export default Header;
import React from 'react';

const Part = ({ name, value }) => {
    return (
        <div>
            <p >{name} {value}</p>
        </div>
    );
};

export default Part;
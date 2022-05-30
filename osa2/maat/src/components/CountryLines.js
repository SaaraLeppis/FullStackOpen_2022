import React from 'react';

const CountryLines = ({ filterList, handleShow }) => {
    return (
        <div>
            {filterList.map((item, i) =>
                <li key={i}>{item.name.common}
                    <button onClick={handleShow} value={item.name.common}>show</button></li>)}
        </div>
    );
};

export default CountryLines;
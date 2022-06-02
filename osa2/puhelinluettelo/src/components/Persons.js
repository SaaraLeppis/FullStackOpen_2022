import React from 'react';
import Person from './Person';

const Persons = ({ data, nameFilter, handleRemove }) => {
    return (
        <ul className='numbers'>
            <Person data={data} nameFilter={nameFilter} handleRemove={handleRemove} />
        </ul>
    );
};

export default Persons;
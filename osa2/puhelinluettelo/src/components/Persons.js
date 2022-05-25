import React from 'react';
import Person from './Person';

const Persons = ({ data, filter }) => {
    return (
        <ul className='numbers'>
            <Person data={data} filter={filter} />
        </ul>
    );
};

export default Persons;
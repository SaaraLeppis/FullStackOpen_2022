import React from 'react';

const Person = ({ data, filter }) => {
    return (
        <>
            {data.filter(item =>
                item.name.toLowerCase().includes(filter.toLowerCase()) || filter === '').map(item => <li key={item.name}>{item.name} {item.number}</li>)
            }
        </>
    );
};

export default Person;
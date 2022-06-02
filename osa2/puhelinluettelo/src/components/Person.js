import React from 'react';

const Person = ({ data, nameFilter, handleRemove }) => {
    console.log(data, "data")
    return (
        <>
            {data.filter(item => nameFilter === '' ||
                item.name.toLowerCase().includes(nameFilter.toLowerCase())).map(item => <li key={item.id}>{item.name} {item.number} <button value={item.id} name={item.name} onClick={handleRemove}>delete</button></li>)
            }
        </>
    );
};

export default Person;
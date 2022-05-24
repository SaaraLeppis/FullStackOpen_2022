import React from 'react';
import Part from './Part';

const Content = ({ parts }) => {

    const createPart = parts.map(part => {
        return <Part key={part.id} name={part.name} value={part.exercises} />
    })

    return (
        <div>
            {createPart}
        </div>
    );
};

export default Content;
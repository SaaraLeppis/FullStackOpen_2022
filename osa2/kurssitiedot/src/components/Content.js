import React from 'react';
import Part from './Part';

const Content = ({ parts }) => {
    const createPart = parts.map(part => {
        return <Part key={part.id} name={part.name} value={part.exercises} />
    })
    //calculate sum of exercises
    const sum = parts.reduce((previous, current) => {
        return previous + current.exercises;
    }, 0);

    return (
        <div className='content'>
            {createPart}
            <p><b>total of {sum} exercises</b></p>
        </div>
    );
};

export default Content;
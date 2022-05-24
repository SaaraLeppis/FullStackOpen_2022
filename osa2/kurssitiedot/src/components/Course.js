import React from 'react';
import Header from './Header';
import Content from './Content';

const Course = ({ course }) => {
    return (
        <div className='course'>
            <Header name={course.name} />
            <Content parts={course.parts} />
        </div>
    );
};

export default Course;
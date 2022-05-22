import React from 'react';

const StatisticLine = (props) => {
    return (
        <p>
            {props.text} {props.value} {props.sign}
        </p>
    );
};

export default StatisticLine;
import React from 'react';

const Statistics = (props) => {
    return (
        <div className="statistic-wrap">
            <h2>Statistics</h2>
            <p>good {props.good}</p>
            <p>neutral {props.neutral}</p>
            <p>bad {props.bad}</p>
            <p>all {props.all}</p>
            <p>average {props.average}</p>
            <p>positive {props.positive} %</p>



        </div>
    );
};

export default Statistics;
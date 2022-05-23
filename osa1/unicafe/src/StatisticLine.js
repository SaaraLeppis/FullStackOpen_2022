import React from 'react';

const StatisticLine = (props) => {
    return (
        <tr>
            <th>{props.text}</th>
            <td>{props.value} {props.sign}</td>
        </tr>
    );
};

export default StatisticLine;
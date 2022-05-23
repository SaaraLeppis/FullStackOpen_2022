import React from 'react';
import StatisticLine from './StatisticLine';

const Statistics = (props) => {
    return (
        <div className="statistic-wrap">
            <h2>Statistics</h2>
            {props.count > 0 &&
                <table>
                    <tbody>
                        <StatisticLine text="good" value={props.good} />
                        <StatisticLine text="neutral" value={props.neutral} />
                        <StatisticLine text="bad" value={props.bad} />
                        <StatisticLine text="all" value={props.all} />
                        <StatisticLine text="average" value={props.average} />
                        <StatisticLine text="positive" value={props.positive} sign="%" />
                    </tbody>
                </table>
            }
            {props.count === 0 &&
                <>
                    No feedback given
                </>
            }
        </div>
    );
};

export default Statistics;
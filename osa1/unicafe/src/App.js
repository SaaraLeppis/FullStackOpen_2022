import { useState } from 'react';


const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [count, setCount] = useState(0);
  let countAll;

  const handleGood = () => {
    setCount(count + 1);
    setGood(good + 1);
  };
  const handleNeutral = () => {
    setCount(count + 1);
    setNeutral(neutral + 1);
  };
  const handleBad = () => {
    setCount(count + 1);
    setBad(bad + 1);
  };
  const all = () => {
    return count;
  };
  const average = () => {
    console.log('average', countAll, count)
    if (count === 0) {
      return '-';
    } else {
      return (((good * 1) + (neutral * 0) + (bad * -1)) / count);
    }
  };
  const positive = () => {
    if (count === 0) {
      return '-';
    } else {
      return (good / count) * 100;
    }
  };

  return (
    <div className='unicafe'>
      <h1>UNICAFE</h1>
      <div className='feedback-wrap'>
        <h2>Give feedback</h2>
        <div className='buttons'>
          <button onClick={handleGood}>good</button>
          <button onClick={handleNeutral}>neutral</button>
          <button onClick={handleBad}>bad</button>
        </div>
      </div>
      <div className="statistic-wrap">
        <h2>Statistics</h2>
        <p>good {good}</p>
        <p>neutral {neutral}</p>
        <p>bad {bad}</p>
        <p>all {all()}</p>
        <p>average {average()}</p>
        <p>positive {positive()} %</p>
      </div>
    </div>
  );
};

export default App;

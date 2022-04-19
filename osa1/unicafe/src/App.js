import { useState } from 'react';


const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleGood = () => {
    setGood(good + 1);
  };
  const handleNeutral = () => {
    setNeutral(neutral + 1)
  };
  const handleBad = () => {
    setBad(bad + 1)
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
      </div>
    </div>
  );
};

export default App;

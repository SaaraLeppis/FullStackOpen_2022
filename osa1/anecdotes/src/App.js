import { useState } from 'react';

const App = () => {

  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Before software can be reusable it first has to be usable.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when dianosing patients.',
    'The best way to get a project done faster is to start sooner',
  ];
  const [selected, setSelected] = useState(0);

  const selectHandler = () => {
    console.log(anecdotes.length)
    const randomNumber = Math.floor(Math.random() * anecdotes.length);
    console.log(randomNumber);
    setSelected(randomNumber);
  }

  return (
    <div className='anecdote-wrapper'>
      {anecdotes[selected]}
      <button onClick={selectHandler}>next anecdote</button>
    </div>
  );
}

export default App;

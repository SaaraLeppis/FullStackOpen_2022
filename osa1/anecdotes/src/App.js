import { useEffect, useState } from 'react';
import Button from './components/Button';

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
  //states 
  const [selected, setSelected] = useState(0);
  const [votesList, setVotesList] = useState([]);
  const [voteCalculator, setVoteCalculator] = useState(0);
  const [mostVoted, setMostVoted] = useState(null);

  //on load create and fill the votes list with 0
  useEffect(() => {
    const n = anecdotes.length;
    const zeroList = Array(n).fill(0);
    setVotesList(zeroList);
  }, []);

  //selecting random anecdote 
  const selectHandler = () => {
    const randomNumber = Math.floor(Math.random() * anecdotes.length);
    setSelected(randomNumber);
  };

  //handle vote and calculate votes 
  const voteHandler = () => {
    const newVotes = [...votesList];
    newVotes[selected] += 1;
    setVotesList(newVotes);
    setVoteCalculator(voteCalculator + 1);
  };

  //when votes added index of most voted set 
  useEffect(() => {
    const indexOfMostVoted = votesList.indexOf(Math.max(...votesList));
    setMostVoted(indexOfMostVoted);
  }, [voteCalculator]);

  return (
    <div className='anecdote-wrapper'>
      {anecdotes[selected]}
      <div className='buttons'>
        <Button handleClick={voteHandler} name="vote" />
        <Button handleClick={selectHandler} name="next anecdote" />
      </div>
      {voteCalculator !== 0 &&
        <div className='most-voted'>
          <p>{anecdotes[mostVoted]}</p>
        </div>
      }
    </div>
  );
}

export default App;

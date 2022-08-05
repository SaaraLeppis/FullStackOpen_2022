import { useDispatch, useSelector } from 'react-redux';
import { createVote } from '../reducers/anecdoteReducer'

const AnecdoteList = () => {
  const dispatch = useDispatch()

  const anecdotes = useSelector(state => state.magic)

  const vote = (id) => {
    dispatch(createVote(id))
  }

  return (
    <div>
      {
        [...anecdotes].sort((a, b) => a.votes < b.votes ? 1 : -1)
          .map(item =>
            <div key={item.id}>
              <div>
                {item.content}
              </div>
              <div>
                has {item.votes}
                <button onClick={() => vote(item.id)}>vote</button>
              </div>
            </div>
          )}

    </div>
  );
};

export default AnecdoteList;
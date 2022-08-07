import { useDispatch, useSelector } from 'react-redux';
import { increaseVote } from '../reducers/anecdoteReducer'
import { setNote } from '../reducers/notificationReducer';

const AnecdoteList = () => {
  const dispatch = useDispatch()

  const anecdotes = useSelector(state => state.magic)
  const filter = useSelector(state => state.filter)

  const handleVote = (item) => {
    // dispatch(vote(id))
    dispatch(increaseVote(item))
    // dispatch(showNotification(`you voted '${item.content}'`))
    // setTimeout(() => dispatch(hideNotification()), 5000)
    dispatch(setNote(`you voted '${item.content}'`, 5))
  }

  if (filter === '') {
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
                  <button onClick={() => handleVote(item)}>vote</button>
                </div>
              </div>
            )}
      </div>
    )
  }
  else {
    return (
      <>
        {anecdotes
          .filter(item => item.content.toLowerCase().includes(filter.toLowerCase()))
          .map(item =>
            <div key={item.id}>
              <div>
                {item.content}
              </div>
              <div>
                has {item.votes}
                <button onClick={() => handleVote(item.id, item.content)}>vote</button>
              </div>
            </div>
          )
        }
      </>
    )
  }
};

export default AnecdoteList;
import { useDispatch, useSelector } from 'react-redux';
import { createVote } from '../reducers/anecdoteReducer'
import { showNotification, hideNotification } from '../reducers/notificationReducer';

const AnecdoteList = () => {
  const dispatch = useDispatch()

  const anecdotes = useSelector(state => state.magic)
  const filter = useSelector(state => state.filter)

  const vote = (id, content) => {
    dispatch(createVote(id))
    dispatch(showNotification(`you voted '${content}'`))
    setTimeout(() => dispatch(hideNotification()), 5000)
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
                  <button onClick={() => vote(item.id, item.content)}>vote</button>
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
                <button onClick={() => vote(item.id, item.content)}>vote</button>
              </div>
            </div>
          )
        }
      </>
    )
  }
};

export default AnecdoteList;
import { useDispatch } from 'react-redux';
import { addNew } from '../reducers/anecdoteReducer'
import { hideNotification, showNotification } from '../reducers/notificationReducer'


const AnecdoteForm = () => {
  const dispatch = useDispatch();

  const addAnecdote = (event) => {
    event.preventDefault()
    const content = event.target.anecdote.value
    event.target.anecdote.value = ''
    dispatch(showNotification(`you created '${content}'`))
    setTimeout(() => dispatch(hideNotification()), 5000)
    dispatch(addNew(content))
  }

  return (
    <>
      <h2>create new</h2>
      <form onSubmit={addAnecdote}>
        <div><input name="anecdote" /></div>
        <button id="create-button">create</button>
      </form>
    </>
  );
};

export default AnecdoteForm;

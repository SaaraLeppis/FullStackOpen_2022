import { useDispatch } from 'react-redux';
import { createNewAnecdote } from '../reducers/anecdoteReducer'
import { setNote } from '../reducers/notificationReducer'

const AnecdoteForm = () => {
  const dispatch = useDispatch();

  const addAnecdote = async (event) => {
    event.preventDefault()
    const content = event.target.anecdote.value
    event.target.anecdote.value = ''
    // const newAnecdote = await anecdoteService.createNew(content)
    // dispatch(addNew(newAnecdote))
    // dispatch(showNotification(`you created '${content}'`))
    // setTimeout(() => dispatch(hideNotification()), 5000)
    dispatch(createNewAnecdote(content))
    dispatch(setNote(`you created '${content}'`, 5))
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

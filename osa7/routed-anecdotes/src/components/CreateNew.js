import { React } from 'react';
import { useNavigate } from 'react-router-dom';
import { useField } from '../hooks';

const CreateNew = (props) => {
  // const [content, setContent] = useState('')
  // const [author, setAuthor] = useState('')
  // const [info, setInfo] = useState('')
  // * changed to use custom hooks *
  // reset needs to be removed from content/author/info {reset, ...content}
  const content = useField('text')
  const author = useField('text')
  const info = useField('text')

  const navigate = useNavigate()
  // * with custom hook, remember to change 'content: content.value' etc
  const handleSubmit = (e) => {
    e.preventDefault()
    props.addNew({
      content: content.value,
      author: author.value,
      info: info.value,
      votes: 0
    })

    props.setNotification(
      `a new anecdote ${content.value} created!`
    )
    setTimeout(() => {
      props.setNotification('')
    }, 5000)

    navigate('/')
  }
  const handleReset = (e) => {
    e.preventDefault()
    content.reset()
    author.reset()
    info.reset()
  }

  const removeReset = (inputValue) => {
    const { reset, ...newInput } = inputValue
    return newInput
  }

  return (
    <div>
      <h2>create a new anecdote</h2>
      <form>
        <div>
          content
          {/* <input name='content' value={content} onChange={(e) => setContent(e.target.value)} /> */}
          <input {...removeReset(content)} />
        </div>
        <div>
          author
          {/* <input name='author' value={author} onChange={(e) => setAuthor(e.target.value)} /> */}
          <input {...removeReset(author)} />
        </div>
        <div>
          url for more info
          {/* <input name='info' value={info} onChange={(e) => setInfo(e.target.value)} /> */}
          <input {...removeReset(info)} />
        </div>
        <button onClick={handleSubmit}>create</button>
        <button onClick={(handleReset)}>reset</button>
      </form>



    </div>
  )

}

export default CreateNew;
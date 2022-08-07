import { useDispatch } from 'react-redux'
import { listFilter } from '../reducers/filterReducer'


const Filter = () => {
  const dispatch = useDispatch()
  const handleChange = (event) => {
    const content = event.target.value
    dispatch(listFilter(content))
  }

  return (
    <div>
      filter <input name="filter" style={{ margin: '1em' }} onChange={handleChange} />
    </div>
  );
};

export default Filter;
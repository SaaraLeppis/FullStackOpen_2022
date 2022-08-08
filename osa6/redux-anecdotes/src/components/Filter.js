// import { useDispatch } from 'react-redux'
import { connect } from 'react-redux'
import { listFilter } from '../reducers/filterReducer'


const Filter = (props) => {
  // const dispatch = useDispatch()
  const handleChange = (event) => {
    const content = event.target.value
    // dispatch(listFilter(content))
    props.listFilter(content)
  }

  return (
    <div>
      filter <input name="filter" style={{ margin: '1em' }} onChange={handleChange} />
    </div>
  );
};

const mapStateToProps = (state) => {
  return { filter: state.filter }

}
const mapDispatchToProps = {
  listFilter
}

const ConnectedFilter = connect(
  mapStateToProps,
  mapDispatchToProps
)(Filter)

export default ConnectedFilter

// export default Filter;
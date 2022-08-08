// import { useSelector } from "react-redux"
import { connect } from "react-redux"


const Notification = (props) => {
  console.log('props', props)
  const style = {
    border: 'solid',
    padding: 10,
    borderWidth: 1
  }

  // const notifications = useSelector(state => state.notification)

  return (
    <>
      {props.notification &&
        < div style={style} >
          {props.notification}
        </div >}
    </>
  )
}

const mapStateToProps = (state) => {
  return {
    notification: state.notification
  }
}

const ConnectedNotifications = connect(mapStateToProps)(Notification)
export default ConnectedNotifications

// export default Notification
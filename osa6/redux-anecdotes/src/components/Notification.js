// import { useSelector } from "react-redux"
import { connect } from "react-redux"


const Notification = (props) => {
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
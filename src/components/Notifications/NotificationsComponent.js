import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getNotifications } from "../../actions/notificationsActions"
import { SimpleDialog } from "./SimpleDialog"

const NotificationsComponent = ({ open, setOpen }) => {
  const [data, setData] = useState([])
  const dispatch = useDispatch()

  const notificationList = useSelector((state) => state.notificationList)
  const { loading, error, notifications } = notificationList
  //  selectedNotifValue
  useEffect(() => {
    if (open) {
      dispatch(getNotifications())
    }
  }, [open])

  useEffect(() => {
    if (notifications) {
      setData(notifications)
    }
  }, [dispatch, notifications])

  const handleClose = () => {
    setOpen(false)
  }

  return (
    <SimpleDialog
      open={open}
      data={notifications}
      loading={loading}
      onClose={handleClose}
    ></SimpleDialog>
  )
}

export default NotificationsComponent

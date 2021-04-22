import { useContext } from "react"
import {AlertContext, useAlert} from './AlertContext'

export const Alert = () => {
  const alert = useAlert()

  if (!alert.visible) return null

  return (
    <div onClick={alert.hide} className="alert alert-danger">
      {alert.text}
    </div>
  )
}
import { useAlert } from "./AlertContext"


export const Main = () => {
  const {show} = useAlert()

  return (
    <>
      <h1>Context hook</h1>
      <button onClick={() => show('Text from Main.js')} className="btn btn-success">Show alert</button>
    </>
  )  
}
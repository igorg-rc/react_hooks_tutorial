import {useEffect, useState} from 'react'

const useLogger = value => {
  useEffect(() => {
    console.log('Value changed', value)
  }, [value])
}

const useInput = (initialValue) => {
  const [value, setValue] = useState(initialValue)

  const onChange = event => {
    setValue(event.target.value)
  }

  const clear = () => {
    setValue('')
  }

  return {
    bind: {value, onChange},
    value,
    clear
  }
}

function App() {
  const input = useInput('')
  const lastname = useInput('')

  useLogger(input.value)

  return (
    <div className="container mt-3">
      <input type="text" {...input.bind} />
      <hr />
      <h1>firstname: {input.value}</h1>
      <button className="btn btn-warning" onClick={() => input.clear()}>Clear</button>
    </div>
  )
}

export default App

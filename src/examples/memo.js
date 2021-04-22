import {useState, useMemo, useEffect} from 'react'

function complexCompute(num) {
  console.log('Complex compute')
  let i = 0
  while (i < 1000000000) i++
  return num * 2
}

function App() {
  const [number, setNumber] = useState(42)
  const [colored, setColored] = useState(false)

  const styles = useMemo(() => {
    return {
      color: colored ? 'red' : 'black'
    }
  }, [colored])

  const computed = useMemo(() => {
    return complexCompute(number)
  }, [number]) 

  
  // const styles = {
  //   color: colored ? 'red' : 'black'
  // }

  useEffect(() => {
    console.log('Styles changed')
  }, [styles])
  
  return (
    <div style={styles} className="App">
      <h1>Calculated property: {computed}</h1>
      <button className={"btn btn-success"} onClick={() => setNumber(prev => prev + 1)}>Add</button>
      <button className={"btn btn-danger"} onClick={() => setNumber(prev => prev - 1)}>Remove</button>
      <button className={"btn btn-warning"} onClick={() => setColored(prev => !prev)}>Change color</button>
    </div>
  )
}

export default App

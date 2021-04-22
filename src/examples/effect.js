import {useState, useEffect} from 'react'

function App() {
  const [type, setType] = useState('users')
  const [data, setData] = useState([])
  const [pos, setPos] = useState({x: 0, y: 0})

  console.log('Component render')

  // useEffect(() => {
  //   console.log('render')
  // })

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${type}`)
      .then(response => response.json())
      .then(json => setData(json))

    return () => {
      console.log('clean type')
    }
  }, [type])

  const mouseMoveHandler = event => {
    setPos({
      x: event.clientX,
      y: event.clientY
    })
  }

  useEffect(() => {
    console.log('Component Did Mount')

    window.addEventListener('mousemove', mouseMoveHandler)

    return window.removeEventListener('mousemove', mouseMoveHandler)
  }, [])

  return (
    <div className="App">
      <h1>Resource: {type}</h1>
      <button className="btn btn-info" onClick={() => setType('users')}>Users</button>
      <button className="btn btn-warning" onClick={() => setType('todo')}>Todo</button>
      <button className="btn btn-success" onClick={() => setType('posts')}>Posts</button>
      
      {/* <pre>{JSON.stringify(data, null, 2)}</pre> */}
      <pre>{JSON.stringify(pos, null, 2)}</pre>
    </div>
  );
}

export default App

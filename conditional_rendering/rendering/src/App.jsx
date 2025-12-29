import { useState } from 'react'
import './App.css'
import ComponentA from './ComponentA'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Conditional Rendering</h1>
      <ComponentA/>
    </>
  )
}

export default App

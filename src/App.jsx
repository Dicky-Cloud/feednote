// src/App.jsx
import { useState } from 'react'
import './App.css'
import logo from './assets/logo.svg'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <div>
        <h1>Welcome to amplify</h1>
      </div>
    </div>
  )
}

export default App

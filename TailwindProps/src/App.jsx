import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Cards from './components/Cards.jsx'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Hello Sagar</h1>
      <Cards />
    </>
  )
}

export default App

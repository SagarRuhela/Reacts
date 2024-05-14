import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
       const [color,setColor]=useState('red');

  return (
    
      <div className="w-full h-screen duration-200" style={{backgroundColor:color}}>
      <button style={{ backgroundColor:"red"}}className="" onClick={()=>setColor('red')}>red</button>
      <button style={{ backgroundColor:"green"}} onClick={()=>setColor('green')}>green</button>
      <button style={{ backgroundColor:"blue"}} onClick={()=>setColor('blue')}>blue</button>
      <button style={{ backgroundColor:"black"}}onClick={()=>setColor('black')}>black</button>
      <button style={{ backgroundColor:"brown"}}onClick={()=>setColor('brown')}>brown</button>
      <button style={{ backgroundColor:"yellow"}}onClick={()=>setColor('yellow')}>yellow</button>
      <button style={{ backgroundColor:"pink"}}onClick={()=>setColor('pink')}>pink</button>
      </div>
   
    
  )
}

export default App

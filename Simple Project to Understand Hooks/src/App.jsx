import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter, setCounter] = useState(2)
  // let counter=19; 
  const addValue = () => {
    if(counter===20){
      counter=20;
    }
    else{
      counter=counter+1;
    }
    setCounter(counter);
  }
  const removeValue = () => {
    if(counter===0){
      counter=0;
    }
    else{
      counter=counter-1;
    }
    setCounter(counter);
    

  }




  return (
    <>
      <h1>Hello Sagar {counter}</h1>
      <h2>Counter value</h2>
      <button onClick={addValue}>Add value</button>
      <br />
      <button onClick={removeValue}>remove value</button>

    </>
  )
}

export default App

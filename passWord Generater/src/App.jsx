import { useCallback, useEffect, useState } from 'react'

import './App.css'

function App() {
  const [password, setPassword] = useState('');
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);


  const passwordGen = useCallback(() => {
    let char = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    let number = "0123456789";
    let special = "!@#$%^&*()_+";
    let pass = '';
    if (charAllowed) {
      char += special;
    }
    if (numberAllowed) {
      char += number;
    }

    for (let i = 0; i < length; i++) {
      let index = Math.floor(Math.random() * char.length);
      pass += char.charAt(index);
    }
    setPassword(pass);
  }, [length, numberAllowed, charAllowed]
  )

  // now for running password generator function we will use useEffect because we want to run this function initialy and then it will run according to the changes in the length, numberAllowed, charAllowed
  useEffect(() => {
    passwordGen();
  }, [numberAllowed, charAllowed, length])
  return (

    <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500">
      <h1 className='text-white text-center my-3'>Password generator</h1>
      <div className="flex shadow rounded-lg overflow-hidden mb-4">
        <input
          type="text"
          value={password}
          className="outline-none w-full py-1 px-3"
          placeholder="Password"
          readOnly

        />
        <button

          className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'
        >copy</button>

      </div>
      <div className='flex text-sm gap-x-2'>
        <div className='flex items-center gap-x-1'>
          <input
            type="range"
            min={6}
            max={40}
            value={length}
            className='cursor-pointer'
            onChange={(e) => { e.target.value = setLength(e.target.value) }}
          />
          <label>Length: {length}</label>
        </div>
        <div className="flex items-center gap-x-1">
          <input
            type="checkbox"
            defaultChecked={numberAllowed}
            id="numberInput"
            onChange={() => {
              setNumberAllowed((prev) => !prev);
            }}
          />
          <label htmlFor="numberInput">Numbers</label>
        </div>
        <div className="flex items-center gap-x-1">
          <input
            type="checkbox"
            defaultChecked={charAllowed}
            id="characterInput"
            onChange={() => {
              setCharAllowed((prev) => !prev)
            }}
          />
          <label htmlFor="characterInput">Characters</label>
        </div>
      </div>
    </div>

  )
}

export default App

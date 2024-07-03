import { useState,useCallback,useEffect,useRef} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [length, setLength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)
  const [password, setPassword] = useState('')

  const passwordRef = useRef(null)

  const generatePassword =useCallback(()=>{
    let pass =""
    let str = 
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if (numberAllowed) str +="0123456789"
    if(charAllowed) str+="!@#$%^&*()_+"

    for(let i=1; i<length;i++){
    const char = Math.floor( Math.random()*str.length+1)
    pass+=str.charAt(char)

    }
setPassword(pass)

  },[length,numberAllowed,charAllowed])

  const copyPasswordToClipboard =()=>{
    window.navigator.clipboard.writeText(password)
    passwordRef.current.select()
   
  }

  useEffect(()=>{
generatePassword()
  },[length,numberAllowed,charAllowed])


  return (
    <div className="bg-gray-100 flex items-center justify-center h-screen">
      <div className="bg-white p-9 rounded shadow-md w-full max-w-xs">
        <h2 className="text-2xl font-bold mb-4 text-emerald-600">Password Generator</h2>
        <div className='flex shadow rounded-lg overflow-hidden mb-4'>
          <input 
            type="text" 
            value={password}
            className='outline-none w-full py-1 px-3'

            placeholder='password'
            readOnly
            ref={ passwordRef}
          />
          <button 
          onClick={copyPasswordToClipboard}
            className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'
          >
            Copy
          </button>
        </div>

        <div className='flex text-sm gap-x-2'>
          <div className='w-full'>
            <input 
              type="range"
              min={6}
              max={100}
              value={length}
              onChange={(e) => setLength(e.target.value)}
              className="cursor-pointer"
              id=''
              name=''
            />
           <label htmlFor="length">Length:{length}</label>
            
          </div>
          <input
           type="checkbox"
           defaultChecked={numberAllowed}
           onChange={()=>{
            setNumberAllowed((prev)=>!prev)
           }}
           
            name="" 
            id="" />
            <label htmlFor="number">Numbers</label>


            <input
           type="checkbox"
           defaultChecked={charAllowed}
           onChange={()=>{
            setNumberAllowed((prev)=>!prev)
           }}
           
            name="" 
            id="" />
            <label htmlFor="charInput">Character </label>
        </div>
      </div>
    </div>
  )
}

export default App

import { useState } from 'react'
import './App.css'

function App() {
const  [counter,  setCounter ]= useState(6)
  // let  counter = 15
   const addValue = ()=>{
     setCounter ( counter +1)
   }
   const removeValue = () =>{

  return (
    <>
      <h1> React with Shourov  {counter} </h1>
      <h1>counter value:{counter}</h1>
      <button onClick={addValue}> Add button </button>
      <button onClick={removeValue}> Remove button </button>
      <p>footer: {counter}</p>
    </>
  )
}

export default App

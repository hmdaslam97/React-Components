import React, { useState,useRef } from 'react'

function GetPreviousCount() {
  const [count,setCount]=useState(0)
  const preRef=useRef(null)

  const inc=(e)=>{
    setCount(prev=>{
      preRef.current=prev
      return prev+1
    })
  }
  
  return (
    <div>
      <button onClick={inc}>+</button>
      <h2>{preRef.current}</h2>
      <h1>{count}</h1>
    </div>
  )
}

export default GetPreviousCount

import React,{useRef,useEffect,useState} from 'react'

function UseRef() {
    let count=useRef(0)
    let [state,setState]=useState(0)

    let myRefForFocus=useRef(null)
    useEffect(()=>{
        myRefForFocus.current.focus() //input field will start blinking and active upon component mount check DOM
    },[])
  return (
    <div>
      {/* will not rerendered on screen but performs operation directly to DOM  */}
      <h1>Ref count is {count.current}</h1>
      <button onClick={()=>{count.current++}}>inc</button>
      <h1>State count is {state}</h1>
      <button onClick={()=>{ setState(state+1)}}>inc</button>

      {/* demonstrates when component is rendered this input field gets focussed */}
      <input type="text" ref={myRefForFocus}/>
    </div>
  )
}

export default UseRef

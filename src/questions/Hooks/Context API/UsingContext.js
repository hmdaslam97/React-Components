import React,{useContext} from 'react'
import { MyContext } from './Context'


function UsingContext() {
    const {user,mode,setMode}=useContext(MyContext)
  return (
    <div style={{backgroundColor:mode?"grey":"wheat"}}>
        <h1 style={{color:mode?"white":"black"}}>{user} is My Name</h1>
        <button onClick={()=>setMode(!mode)}>{mode?"Light":"Dark"}</button>
    </div>
  )
}

export default UsingContext

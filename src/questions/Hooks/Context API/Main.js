import { useState } from 'react'
import { MyContext } from './Context'
import UsingContext from './UsingContext'

function Main() {
    const user="Mohammed Aslam"
    const [mode,setMode]=useState(false)

  return (
    <MyContext.Provider value={{user,mode,setMode}}>
    <div>
    <h1>Main</h1>
        <UsingContext/>
    </div>
    </MyContext.Provider>
  )
}

export default Main

import React from 'react'

export const PrintWhenInputStop = () => {

    let timeout=null
    const handleChange=(value)=>{
        clearTimeout(timeout)
        timeout=setTimeout(() => {
           console.log(value)
        }, 1000);
    }
    React.useEffect(()=>{
        return ()=>{clearTimeout(timeout)}
    },[])
  return (
    <div>
      <p>Enter Name</p>
      <input type="text" onChange={(e)=>handleChange(e.target.value)}/>
    </div>
  )
}



import React from 'react'

const SetTimeout = () => {

    const execute=()=>{
        let c=4, id;
        for(let i=1;i<=c;i++)
        {
          console.log("outside",i) //prints i values instanatly
          id = setTimeout(() => {
              console.log("inside",i) //prints i values after interval comming from call stack
          }, i*1000)
        }
    }
  return (
    <div>
    Hello
    <button onClick={execute}>Execute</button>
  </div>
  )
}

export default SetTimeout

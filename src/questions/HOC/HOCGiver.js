import React from 'react'
import { Navbar } from './Navbar'

export const HOCGiver = (Component) => (props)=>{
    return <>
        <div>
            <Navbar/>
            <Component />
        </div>
    </>
  }



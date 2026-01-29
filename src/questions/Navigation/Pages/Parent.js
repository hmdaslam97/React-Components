import React from 'react'
import { Outlet, Link } from 'react-router-dom'

function Parent() {
  return (
    <div>
      Parent Component
      <Link to="/about">Go to About</Link>
      <Outlet/>
    </div>
  )
}

export default Parent

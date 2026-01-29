import React from 'react'
import Home from './Pages/Home'
import About from './Pages/About'
import NotFound from './Pages/NotFound.js'
import { BrowserRouter,Routes, Route } from 'react-router-dom'
import Parent from './Pages/Parent'

function Main() {
  return (
    <div>
        <h1>Welcome to Routing in React</h1>
      <BrowserRouter>
        <Routes>
            <Route path='/' element={<Parent/>}>
                <Route index path='Home' element={<Home/>}/>
                <Route path='about' element={<About/>}/>
                <Route path='*' element={<NotFound/>}/>
            </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default Main

import React from 'react'
import Cart from './components/Cart'
import products from "./products.json"
import Products from './components/Products'

const ReduxMain = () => {
  return (
    <div className='App'>
      <Cart/>
      <div>
        {products.map((product)=>(
          <Products {...product}/>
        ))}
      </div>
    </div>
  )
}

export default ReduxMain
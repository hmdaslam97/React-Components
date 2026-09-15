import React from 'react'
import { useSelector } from 'react-redux'
import {getItemsSelector} from '../myRedux/slices/cartSlice'


const Cart = () => {
  //const items = useSelector(state => state) //other way is shown below
  const items = useSelector(getItemsSelector)
  //console.log(items)
  const total = items.reduce((prev, curr)=>prev+curr.price, 0)
  return (
    <div className="alert alert-success">
      <h3 className="text-center">Total item {items?.length} Rs {total}/-</h3>
    </div>
  )
}

export default Cart
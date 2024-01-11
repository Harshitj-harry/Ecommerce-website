import React, { useContext } from 'react'
import CartItems from '../Components/CartItems/CartItems'
import { ShopContext } from '../Components/Context/ShopContext'

const Cart = () => {
  const {cartItems}=useContext(ShopContext)

  return (
    <div >
      {Object.values(cartItems).reduce((acc, quantity) => acc + quantity, 0) > 0 ? (
          <CartItems />): 
          (<p style={{ fontSize: '80px', margin: '140px' }}>
               Your cart is empty. Please add some items.
           </p>)}
    </div>
  )
}

export default Cart
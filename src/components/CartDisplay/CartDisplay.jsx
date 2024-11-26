import React from 'react'
import './CartDisplay.css'
import AppearanceDisplay from "../../components/AppearanceDisplay/AppearanceDisplay"
import ColorVarity from "../../components/ColorVarity/ColorVarity"
import AddToCart from "../../components/AddToCart/AddToCart"
import Delivery from '../Delivery/Delivery'

const CartDisplay = () => {
  return (
    <div className='add_and_delivery'>
    <div className='cart_display'>
      <div className='display_varity'>
      <AppearanceDisplay />
      <ColorVarity />
      </div>
      <AddToCart />
    </div>
    <Delivery />
    </div>
  )
}

export default CartDisplay

import React from 'react'
import './CartNavbar.css'
import { FaChevronRight } from "react-icons/fa";

const CartNavbar = () => {
  return (
    <div className='cart_navbar_container'>
      <p>Home</p>
      <FaChevronRight className='icon' size={15} color='#808080' />
      <p>Kids</p>
      <FaChevronRight className='icon' size={15} color='#808080' />
      <p>Shoes</p>
      <FaChevronRight className='icon' size={15} color='#808080' />
      <p className='selected_cart'>Sneakers</p>
    </div>
  )
}

export default CartNavbar

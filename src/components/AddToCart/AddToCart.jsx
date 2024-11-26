import React from 'react'
import './AddToCart.css'
import { FaInstagram } from "react-icons/fa";
import { RiWhatsappLine } from "react-icons/ri";
import { BsTwitterX } from "react-icons/bs";
import { RiShoppingBasketLine } from "react-icons/ri";

const AddToCart = () => {
  return (
    <div className='add_to_cart'>
      <div>
        <p className='share'>Share this product</p>
        <div className='share_icon'>
          <FaInstagram className='icon' size={24} color='#222222' />
          <RiWhatsappLine className='icon' size={26} color='#222222' />
          <BsTwitterX className='icon' size={24} color='#222222' />
        </div>
      </div>
      <div className='pickup'>
        <div className='add_buy'>
          <div className='add_to'>
            <RiShoppingBasketLine className='icon' size={24} color='black' />
            <p>Add to cart</p> 
          </div>
          <div className='buy_now'>
            Buy now
          </div>
        </div>
        <p className='pick_pay'>Pickup & Pay on collection available</p>
      </div>
    </div>
  )
}

export default AddToCart

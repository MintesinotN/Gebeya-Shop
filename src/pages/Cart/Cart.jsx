import React from 'react'
import './Cart.css'
import CartNavbar from '../../components/CartNavbar/CartNavbar'
import CartDisplay from '../../components/CartDisplay/CartDisplay'
import SimilarItems from '../../components/SimilarItems/SimilarItems'

const Cart = () => {
  return (
    <div className='container_cart'>
      <div className='to_border'>
        <CartNavbar />
        <CartDisplay />
        <SimilarItems />
      </div>
    </div>
  )
}

export default Cart

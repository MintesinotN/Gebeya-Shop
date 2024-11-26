import React from 'react'
import './Checkout.css'
import ShippingContainer from '../../components/ShippingContainer/ShippingContainer'
import Payment from '../../components/Payment/Payment'

const Checkout = () => {
  return (
    <div className='container_checkout'>
        <div className='giving_border'>
            <ShippingContainer />
            <Payment />
        </div>
    </div>
  )
}

export default Checkout
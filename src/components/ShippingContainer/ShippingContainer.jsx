import React from 'react'
import './ShippingContainer.css'
import ShippingAddress from '../ShippingAddress/ShippingAddress'
import OrderSummary from '../OrderSummary/OrderSummary'

const ShippingContainer = () => {
  return (
    <div className='shipping_address_container'>
        <ShippingAddress />
        <OrderSummary />
    </div>
  )
}

export default ShippingContainer
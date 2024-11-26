import React from 'react'
import './OrderSummary.css'
import { views } from '../../asset/Data'

const OrderSummary = () => {
  return (
    <div className='order_summary'>
        <h3>Order Summary</h3>
        <hr />
        <div className='taxation'>
        <div className='order_description'>
          <div className='order_img'>
            <img src={views[0]} alt="" />
          </div>
          <div className='order_head'>
            <h4>Burberry shine</h4>
            <p>FENDI</p>
          </div>
        </div>
        <div className='price_tax'>
          <div className='pricing'>
            <p>Subtotal</p>
            <h5>$150</h5>
          </div>
          <div className='pricing'>
            <p>Shipping</p>
            <h5>$10</h5>
          </div>
          <div className='pricing'>
            <p>Tax</p>
            <h5>$5</h5>
          </div>
        </div>
        </div>
        <hr />
        <div className='total'>
          <p>Total</p>
          <p>$165</p>
        </div>
        <div className='place_order'>
          <p>Place order</p>
        </div>
    </div>
  )
}

export default OrderSummary
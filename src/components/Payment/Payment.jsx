import React from 'react'
import './Payment.css'
import { CiCreditCard1 } from "react-icons/ci";
import { CiWallet } from "react-icons/ci";
import { TbTransfer } from "react-icons/tb";

const Payment = () => {
  return (
    <div className='payment_container'>
      <div>
        <hr className="payment" />
        <h3>Payment method</h3>
        <hr className="payment" />
        <div className='payment_system'>
          <div className='selected_payment_system'>
            <div className='name_payment'>
              <CiCreditCard1 className='icon' size={32} color='white' />
              <p>Card</p>
            </div>
          </div>
          <div>
            <div className='name_payment'>
              <CiWallet className='icon' size={32} color='#808080' />
              <p>Wallet</p>
            </div>
          </div>
          <div>
            <div className='name_payment'>
              <TbTransfer className='icon' size={32} color='#808080' />
              <p>Bank transfer</p>
            </div>
          </div>
        </div>
        <label htmlFor="Name">Name on card</label>
        <div className='div_drop_payment'>
        <input type="text" id='Name' placeholder='First & Last Name' className='payment_drop' />
        </div>
        <label htmlFor="Card">Name on card</label>
        <div className='div_drop_payment'>
        <input type="text" id='Card' placeholder='0000  0000  0000  0000' className='payment_drop' />
        </div>
        <div className='payment_form'>
        <div>
            <label htmlFor="Expiry">Expiry</label>
            <div className='div_payment'>
            <select name="" id="Expiry" className='shipping_drop' >
            <option value="" disabled selected>MM</option>
            <option value="value1">Option 1</option>
            <option value="value2">Option 2</option>
            <option value="value3">Option 3</option>
            </select>
            </div>
          </div>
          <div>
            <div className='div_payment'>
            <select name="" id="Year" className='shipping_drop' >
            <option value="" disabled selected>Select State</option>
            <option value="value1">Option 1</option>
            <option value="value2">Option 2</option>
            <option value="value3">Option 3</option>
            </select>
            </div>
          </div>
          <div>
            <label htmlFor="CVV">CVV</label>
            <div className='div_payment'>
            <select name="" id="CVV" className='shipping_drop' >
            <option value="" disabled selected>CVV</option>
            <option value="value1">Option 1</option>
            <option value="value2">Option 2</option>
            <option value="value3">Option 3</option>
            </select>
            </div>
          </div>
        </div>
        <div className='place_order_pay'>
          <p>Place order</p>
        </div>
      </div>
    </div>
  )
}

export default Payment
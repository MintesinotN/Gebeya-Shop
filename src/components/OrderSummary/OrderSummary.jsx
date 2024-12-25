import React, { useContext } from 'react'
import './OrderSummary.css'
import { StoreContext } from '../../context/StoreContext';
import { Link } from 'react-router-dom';

const OrderSummary = () => {

  const {selected,popup,PopupFunction,ToHome} = useContext(StoreContext)

  return (
    <div className='order_summary'>
        <h3>Order Summary</h3>
        <hr />
        <div className='taxation'>
        <div className='order_description'>
          <div className='order_img'>
            <img src={selected.view?.[0]} alt="Choice Item" />
          </div>
          <div className='order_head'>
            <h4>{selected.desc}</h4>
            <p>{selected.brand}</p>
          </div>
        </div>
        <div className='price_tax'>
          <div className='pricing'>
            <p>Subtotal</p>
            <h5>${selected?.price ? selected?.price:0}</h5>
          </div>
          <div className='pricing'>
            <p>Shipping</p>
            <h5>${selected?.price ? 10:0}</h5>
          </div>
          <div className='pricing'>
            <p>Tax</p>
            <h5>${selected?.price ? 5:0}</h5>
          </div>
        </div>
        </div>
        <hr />
        <div className='total'>
          <p>Total</p>
          <p>${selected?.price ? selected?.price+15:0}</p>
        </div>
        <div onClick={PopupFunction} className='place_order'>
          <p>Place order</p>
        </div>
        <div className={popup ? 'non_popup':'popup'} >
        <div className="popup-content">
          <p>Completed Successfully!</p>
          <Link to='/' onClick={ToHome} className="close-btn">Close</Link>
        </div>
        </div>
    </div>
  )
}

export default OrderSummary
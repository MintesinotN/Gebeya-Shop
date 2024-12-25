import React from 'react'
import './Delivery.css'
import { TbTruckDelivery } from "react-icons/tb";
import { PiKeyReturnLight } from "react-icons/pi";
// h5
const Delivery = () => {
  return (
    <div className='delivery'>
      <hr className='for_hr' />
        <h2>
        Delivery & Returns
        </h2>
        <hr />
        <div className='delivery_container'>
            <div>
                <h4>Location</h4>
                <div className='div_drop'>
                <select className='location_drop'>
                  <option value="" disabled selected>Location</option>
                  <option value="value1">Option 1</option>
                  <option value="value2">Option 2</option>
                  <option value="value3">Option 3</option>
                </select>
                </div>
                <div className='div_drop'>
                <select className='location_drop'>
                  <option value="" disabled selected>Sub-location</option>
                  <option value="value1">Option 1</option>
                  <option value="value2">Option 2</option>
                  <option value="value3">Option 3</option>
                </select>
                </div>
                <div className='time_delivery'>
                    <TbTruckDelivery className='icon' size={36} />
                    <div className='estimated_time'>
                        <h3>Delivery</h3>
                        <p>Estimated delivery time is 1-12 business days </p>
                        <p><span>For Same-Day-Delivery:</span> Please place your order before 12pm</p>
                        <p><span>Next-Day-Delivery:</span> Orders placed after 12pm will be delivered the next day.</p>
                        <p><span>Note:</span> Availability may vary by location</p>
                    </div>
                </div>
                <div className='return_delivery'>
                    <PiKeyReturnLight size={36} />
                    <div className='return_detail'>
                        <h3>Return policy</h3>
                        <h5>Guaranteed 7-day return policy</h5>
                        <p>For details about return shipping options, please visit our <span>Contact page</span></p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Delivery
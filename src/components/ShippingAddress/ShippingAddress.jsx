import React from 'react'
import './ShippingAddress.css'

const ShippingAddress = () => {
  return (
    <div className='shipping_container'>
        <hr className='hr_of_address' />
        <div>
            <h3>Shipping Address</h3>
            <label htmlFor="Name">Name</label>
            <div className='div_drop_ship'>
            <input type="text" id='Name' placeholder='First & Last Name' className='shipping_drop' />
            </div>
            <label htmlFor="Address1">Address 1</label>
            <div className='div_drop_ship'>
            <input type="text" id='Address1' placeholder='412, Dubai St' className='shipping_drop' />
            </div>
            <label htmlFor="Address2">Address 2</label>
            <div className='div_drop_ship'>
            <input type="text" id='Address2' placeholder='23rd, Boulevard Ave' className='shipping_drop' />
            </div>
            <div className='address_form'>
                <div className='to_contain'>
                    <label htmlFor="City">City</label>
                    <div className='div_ship'>
                    <input type="text" id='City' placeholder='Enter City' />
                    </div>
                </div>
                <div className='to_contain'>
                    <label htmlFor="State">State</label>
                    <div className='div_ship'>
                    <select name="" id="State" className='shipping_drop' >
                    <option value="" disabled selected>Select State</option>
                    <option value="value1">Option 1</option>
                    <option value="value2">Option 2</option>
                    <option value="value3">Option 3</option>
                    </select>
                    </div>
                </div>
                <div className='to_contain'>
                    <label htmlFor="Zip">Zip</label>
                    <div className='div_ship'>
                    <input type="text" id='Zip' placeholder='Zip code' />
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ShippingAddress
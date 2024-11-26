import React from 'react'
import './ColorVarity.css'
import { IoHeartOutline } from "react-icons/io5";
import { IoIosStar } from "react-icons/io";

const ColorVarity = () => {
  return (
    <div className='color_varity_container'>
      <hr className='assigned_hr' />
      <div className='name'>
        <h2>Burberry shine</h2>
        <div className='heart'>
        <IoHeartOutline className='icon' size={25} color='white' />
        </div>
      </div>
      <p className='brand'>Brand: <span>FENDI</span></p>
      <hr className='hr1' />
      <div className='price'>
        <h3>$150</h3>
        <del>$300</del>
        <h4>-50%</h4>        
      </div>
      <div className='units'>
        <p>50 units left</p>
        <p>+ Shipping fee may vary on location</p>
        <p className='star_symbol'><span><IoIosStar size={16} color='#FFD700' /></span> <p>1k+ rating</p></p>
      </div>
      <hr className='hr2' />
      <div className='quality_container'>
        <p>Quality:</p>
        <div className='quantity'>
          <div className='minus'>-</div>
          <p>1</p>
          <div className='plus'>+</div>
        </div>
      </div>
      <div>
        <div className='size_display'> 
          <div className='numbers'>
            <p className='sizeof'>size: </p>
            <p>20</p>
            <p>25</p>
            <p>32</p>
            <p>47</p>
          </div>
          <p>See all size guides</p>
        </div>
      </div>
      <div className='colors'>
        <div className='colorof'>Color:</div>
        <div className='color_gray'>
          <div className='gray'></div>
        </div>
        <div>
          <div className='blue'></div>
        </div>
        <div>
          <div className='green'></div>
        </div>
        <div>
          <div className='black'></div>
        </div>
      </div>
    </div>
  )
}

export default ColorVarity

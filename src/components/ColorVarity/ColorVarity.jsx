import React, { useContext } from 'react'
import './ColorVarity.css'
import { IoHeartOutline } from "react-icons/io5";
import { IoIosStar } from "react-icons/io";
import { StoreContext } from '../../context/StoreContext';

const ColorVarity = () => {

  const {selected,Increase,Decrease,quantity} = useContext(StoreContext)

  return (
    <div className='color_varity_container'>
      <hr className='assigned_hr' />
      <div className='name'>
        <h2>{selected?.desc}</h2>
        <div className='heart'>
        <IoHeartOutline className='icon' size={25} color='white' />
        </div>
      </div>
      <p className='brand'>Brand: <span>{selected?.brand}</span></p>
      <hr className='hr1' />
      <div className='price'>
        <h3>${selected?.price}</h3>
        <del>${selected?.price*2}</del>
        <h4>-50%</h4>        
      </div>
      <div className='units'>
        <p>50 units left</p>
        <p>+ Shipping fee may vary on location</p>
        <p className='star_symbol'><span><IoIosStar size={16} color='#FFD700' /></span> <p>{selected?.rating} rating</p></p>
      </div>
      <hr className='hr2' />
      <div className='quantity_container'>
        <p>Quality:</p>
        <div className='quantity'>
          <div onClick={Decrease} className='minus'>-</div>
          <p>{quantity}</p>
          <div onClick={Increase} className='plus'>+</div>
        </div>
      </div>
      <div>
        <div className='size_display'> 
          <div className='numbers'>
            <p className='sizeof'>size: </p>
            <p>{selected.size?.[0]}</p>
            <p>{selected.size?.[1]}</p>
            <p>{selected.size?.[2]}</p>
            <p>{selected.size?.[3]}</p>
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

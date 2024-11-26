import React from 'react'
import './LargeDisplay.css'
import { IoHeartOutline } from "react-icons/io5";
import { IoIosStar } from "react-icons/io";

const LargeDisplay = ({disp}) => {

  return (
    <div className='large_display'>
      <div className='container_padding'>
        <div className='container_sub'>
            <div className='container_reference'>
                <div className='large_image_display'>
                  <img src={disp.image} alt="" />
                </div>
                <div className='large_favorite'>
                    <IoHeartOutline className='icon' size={25} color='black' />
                </div>
                <div className='stock'>In Stock</div>
            </div>
            <div className='rating_container'>
                <div className='person_description'>
                    <p>{disp.person}</p>
                </div>
                <div className='rating'>
                <IoIosStar className='icon' size={24} color='#FFD700' />
                <div><span>{disp.rating}</span>+ rating</div>
                </div>
            </div>
        </div>
        <div className='cloth_description'>
            <h2>{disp.desc}</h2>
            <p>{disp.brand}</p>
            <div className='price_cart'>
                <h2>{disp.price}</h2>
                <div className='add_cart'>
                    Add to cart
                </div>
            </div>   
        </div>
      </div>
    </div>
  )
}

export default LargeDisplay

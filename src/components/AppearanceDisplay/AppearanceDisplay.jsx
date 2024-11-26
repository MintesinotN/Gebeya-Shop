import React from 'react'
import './AppearanceDisplay.css'
import { views,cart } from '../../asset/Data'

const AppearanceDisplay = () => {
  return (
    <div>
      <div className='cart_img'>
        <img src={cart} alt="" />
      </div>
      <div className='different_view'>
        <img src={views[0]} className='each_view' />
        <img src={views[1]} className='each_view' />
        <img src={views[2]} className='each_view' />
        <img src={views[3]} className='each_view' />
      </div>
    </div>
  )
}

export default AppearanceDisplay
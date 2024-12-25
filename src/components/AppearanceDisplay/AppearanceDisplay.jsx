import React, { useContext } from 'react'
import './AppearanceDisplay.css'
import { StoreContext } from '../../context/StoreContext'

const AppearanceDisplay = () => {

  const {selected} = useContext(StoreContext);

  return (
    <div className='appearance_container'>
      <div className='cart_img'>
        <img src={selected?.image} alt="Main Disp" />
      </div>
      <div className='different_view'>
        <img src={selected.view?.[0]} alt='side view' className='each_view' />
        <img src={selected.view?.[1]} alt='side view' className='each_view' />
        <img src={selected.view?.[2]} alt='side view' className='each_view' />
        <img src={selected.view?.[3]} alt='side view' className='each_view' />
      </div>
    </div>
  )
}

export default AppearanceDisplay
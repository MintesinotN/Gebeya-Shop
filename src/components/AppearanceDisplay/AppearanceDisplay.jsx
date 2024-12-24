import React, { useContext } from 'react'
import './AppearanceDisplay.css'
import { StoreContext } from '../../context/StoreContext'

const AppearanceDisplay = () => {

  const {selected} = useContext(StoreContext);

  return (
    <div className='appearance_container'>
      <div className='cart_img'>
        <img src={selected?.image} alt="" />
      </div>
      <div className='different_view'>
        <img src={selected.view?.[0]} className='each_view' />
        <img src={selected.view?.[1]} className='each_view' />
        <img src={selected.view?.[2]} className='each_view' />
        <img src={selected.view?.[3]} className='each_view' />
      </div>
    </div>
  )
}

export default AppearanceDisplay
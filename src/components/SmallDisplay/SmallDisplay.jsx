import React from 'react'
import './SmallDisplay.css'

const SmallDisplay = ({disp}) => {
  return (
    <div className='small_container'>
      <div className='small_sub'>
        <div className='small_image'>
          <img src={disp.image} alt={disp.type} />
        </div>
        <h2>{disp.type}</h2>
        <p>See all collections</p>
      </div>
    </div>
  )
}

export default SmallDisplay

import React from 'react'
import './Browse.css'

const Browse = ({disp}) => {
  return (
    <div>
      <div className='browse_container'>
        <div className='browse_img'>
          <img src={disp.image} alt={disp.type} />
        </div>
        <div className='browse_desc'>
            <h2>
             {disp.type}
            </h2>
            <p>
             {disp.desc}
            </p>
        </div>
      </div>
    </div>
  )
}

export default Browse

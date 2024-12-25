import React from 'react'
import './LandingPage.css'

const LandingPage = () => {
  return (
    <div className='container_1'>
      <div className='gebeya'>
        Gebeya
      </div>
      <div className='feature1'>
        <img src="/assets/Feature1.png" alt="Model 1" width={300} height={300} />
      </div>
      <div className='moto'>
        <p>
        Discover a world of convenience with our user-friendly platform, curaated collections, and exceptional customer service
        </p>
      </div>
      <div className="shop">
        SHOP
      </div>
      <div className='feature2'>
        <img src="/assets/Feature2.png" alt="Model 2" width={260} height={260} />
      </div>
      <div className='explore_button'>
        <p>Explore Now</p>
      </div>
      <div className='feature3'>
        <img src="/assets/Feature3.png" alt="Model 3" width={223} height={223} />
      </div>
    </div>
  )
}

export default LandingPage

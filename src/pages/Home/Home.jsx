import React from 'react'
import './Home.css'
import LandingPage from '../../components/LandingPage/LandingPage'
import LatestCollections from '../../components/LatestCollections/LatestCollections'

const Home = () => {
  return (
    <div>
      <LandingPage />
      <div className='homeContainer'>
        <LatestCollections />
      </div>
    </div>
  )
}

export default Home

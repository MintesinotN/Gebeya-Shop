import React, { useContext } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import Home from './pages/Home/Home'
import Cart from './pages/Cart/Cart'
import Checkout from './pages/Checkout/Checkout'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import { StoreContext } from './context/StoreContext'

const App = () => {

  const {routeTo} = useContext(StoreContext);

  return (
    <div>
      <Navbar />
      <main role='main'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/cart' element={routeTo ? <Cart /> : <Navigate to='/' replace /> } />
        <Route path='/checkout' element={routeTo ? <Checkout /> : <Navigate to='/' replace /> } />
      </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App

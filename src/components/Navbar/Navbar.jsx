import React from 'react'
import './Navbar.css'
import { IoIosContact } from "react-icons/io";
import { FaChevronDown } from "react-icons/fa";
import { FiSearch } from "react-icons/fi";
import { RiShoppingBasketLine } from "react-icons/ri";
import { FaChevronUp } from "react-icons/fa";
import { VscThreeBars } from "react-icons/vsc";

const Navbar = () => {
  return (
    <div className='container'>
      <div>
      <VscThreeBars className='icon menu_mobile' size={32} color='black' />
      </div>
      <img src="/assets/Logo.png" alt="Logo" width={32} height={32} />
      <div className='menubar'>
        <div className='register'>
        <IoIosContact size={20} color='#1E1E1E' className='icon' />
        <p>Register/Sign in</p>
        <FaChevronDown className='icon not_hover' size={12} color='#1E1E1E' />
        <FaChevronUp className='icon is_hover' size={12} color='#1E1E1E' />
        <div className='register_hover'>
          <p>Register</p>
          <hr />
          <p> Sign In</p>
        </div>
        </div>
        <p className='selected'>Home</p>
        <p>Men</p>
        <p>Women</p>
        <p>Kids</p>
        <p>Accessories</p>
        <div className='more'>
          <p>More</p>
          <FaChevronDown className='icon not_hover' size={12} color='#1E1E1E' />
          <FaChevronUp className='icon is_hover' size={12} color='#1E1E1E' />
          <div className='hover_output'>
            <p>Perfumes</p>
            <hr />
            <p>Jewelries</p>
            <hr />
            <p>Gym wears</p>
            <hr />
            <p>Vintage wears</p>
            <hr />
            <p>Sport wear</p>
            <hr />
            <p>Pyjamas</p>
            <hr />
            <p>Slippers</p>
          </div>
        </div>
      </div>
      <div className='search'>
        <div className='space'>
        <FiSearch className='icon' size={20} color='#1E1E1E' />
        <input type="text" placeholder='Search' />
        </div>
        <div className='button'>
          <FiSearch className='icon' size={26} color='white' />
        </div>
      </div>
      <div className='currency'>
        <img src="/assets/united kingdom.png" alt="" width={24} height={24} />
        <p>EN/Currency</p>
          <FaChevronDown className='icon' size={12} color='#1E1E1E' />
        </div>
        <div className='cart'>
          <div className='cart_logo'>
            <RiShoppingBasketLine className='icon' size={24} color='white' />
          </div>
          <div className='cart_count'>
            <p>2</p>
          </div>
        </div>
    </div>
  )
}

export default Navbar

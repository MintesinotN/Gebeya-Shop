import React,{useContext} from 'react'
import './MenuMobile.css'
import { MdOutlineClear } from "react-icons/md";
import { FaChevronRight } from "react-icons/fa";
import { FaChevronDown } from "react-icons/fa";
import { StoreContext } from '../../context/StoreContext';

const MenuMobile = () => {

    const {MenuDisplay} = useContext(StoreContext)

  return (
    <div className='menu_for_mobile'>
        <div className='cancel'>
        <MdOutlineClear onClick={MenuDisplay} size={32} color='#1E1E1E' />
        <img src="/assets/Logo.png" alt="Logo" width={32} height={32} />
        </div>
        <hr />
        <div className='register_mobile'>
        <p>Register/Sign</p>
        <FaChevronRight size={12} color='#1E1E1E' />
        </div>
        <hr />
        <p>Men</p>
        <p>Women</p>
        <p>Kids</p>
        <p>Accessories</p>
        <div className='more_mobile'>
          <p>More</p>
          <FaChevronDown size={12} color='#1E1E1E' />
        </div>
        <hr />
        <div className='currency_mobile'>
        <img src="/assets/united kingdom.png" alt="Currency" width={24} height={24} />
        <p>EN/Currency</p>
        <FaChevronRight size={12} color='#1E1E1E' />
        </div>
    </div>
  )
}

export default MenuMobile
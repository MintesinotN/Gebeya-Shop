import React from 'react'
import './Footer.css'
import { FaInstagram } from "react-icons/fa";
import { RiWhatsappLine } from "react-icons/ri";
import { BsTwitterX } from "react-icons/bs";
import { FaChevronDown } from "react-icons/fa";

const Footer = () => {
  return (
    <div className='outer_footer'>
    <div className='footer'>
        <div>
        <img src="./assets/footer_logo.png" alt="" width={207.17} height={151.22} />
        <div className='footer_contact_logo'>
          <FaInstagram className='icon' size={24} color='white' />
          <RiWhatsappLine className='icon' size={26} color='white' />
          <BsTwitterX className='icon' size={24} color='white' />
        </div>
        </div>
        <hr />
      <div className='footer_content'>
        <div className='footer_detail'>
            <h3>About</h3>
            <p>About Us</p>
            <p>News & Blog</p>
            <p>Location</p>
            <FaChevronDown className='icon down_sign' size={20} color='white' />
        </div>
        <div className='footer_detail'>
            <h3>Products</h3>
            <p>Pricing</p>
            <p>Store</p>
            <p>Features</p>
            <FaChevronDown className='icon down_sign' size={20} color='white' />
        </div>
        <div className='footer_detail'>
            <h3>Discover</h3>
            <p>Contact Us</p>
            <p>Customers</p>
            <p>Affiliates</p>
            <FaChevronDown className='icon down_sign' size={20} color='white' />
        </div>
      </div>
    </div>
    </div>

  )
}

export default Footer

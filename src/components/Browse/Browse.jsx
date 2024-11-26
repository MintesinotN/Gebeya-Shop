import React from 'react'
import './Browse.css'
import { FaChevronLeft } from "react-icons/fa6";
import { FaChevronRight } from "react-icons/fa";

const Browse = ({disp}) => {
  return (
    <div>
      <div className='browse_container'>
        <div className='browse_img'>
          <img src={disp.image} alt="" />
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

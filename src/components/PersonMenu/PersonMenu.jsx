import React from 'react'
import './PersonMenu.css'
import SmallDisplay from '../SmallDisplay/SmallDisplay'
import { items } from '../../asset/data'
import { FaChevronRight } from "react-icons/fa";

const PersonMenu = () => {

  const display = items.find(item=>item.title==="sm")

  return (
    <div className='menu_container'>
        <div className='menu_person'>
            <p>Men</p>
            <p className='selected_one'>Women</p>
            <p>Kids</p>
            <p>Perfumes</p>
            <p>Sport</p>
            <p>Jewelry</p>
        </div>
        <div className='toiterate_small'>
          {
            display.content.map(disp=>
              <SmallDisplay key={disp.desc} disp={disp} />
            )
          }
        </div>
        <div className='see_container'>
          <div className='see_more'>
            See more
            <div className='see_arrow'>
            <FaChevronRight />
            <FaChevronRight />
            <FaChevronRight />
            </div>
          </div>
        </div>
    </div>
  )
}

export default PersonMenu

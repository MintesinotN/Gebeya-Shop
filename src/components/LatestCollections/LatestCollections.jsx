import React from 'react'
import './LatestCollections.css'
import LargeDisplay from '../LargeDisplay/LargeDisplay'
import PersonMenu from '../PersonMenu/PersonMenu'
import SummerCollection from '../../components/SummerCollection/SummerCollection'
import Browse from '../Browse/Browse'
import { FaChevronLeft } from "react-icons/fa6";
import { FaChevronRight } from "react-icons/fa";
import { items } from '../../asset/data'

const LatestCollections = () => {

    const display = items.find(item=>item.title==="latest")
    const display_br = items.find(item=>item.title==="br")

  return (
    <div>
        <div className='LatestCollection'>
            <h2>Latest Collections</h2>
            <div className='controller'>
                <div className='leftArrow'>
                    <FaChevronLeft className='icon' size={15} color='white' />
                </div>
                <div className='rightArrow'>
                    <FaChevronRight className='icon' size={15} color='white' />
                </div>
            </div>
        </div>
        <div className='toiterate'>
        {
            display.content.map(disp=>
            <LargeDisplay key={disp.desc} disp={disp} />
            )
        }
        </div>
        <PersonMenu />
        <SummerCollection />
        <div className='LatestCollection'>
        <h2>Browse by category</h2>
        <div className='controller'>
            <div className='leftArrow'>
              <FaChevronLeft className='icon' size={15} color='white' />
            </div>
            <div className='rightArrow'>
              <FaChevronRight className='icon' size={15} color='white' />
            </div>
        </div>
      </div>
        <div className='toiterate'>
            {
                display_br.content.map(disp=>
                    <Browse key={disp.desc} disp={disp} />
                )
            }
        </div>
    </div>
  )
}

export default LatestCollections

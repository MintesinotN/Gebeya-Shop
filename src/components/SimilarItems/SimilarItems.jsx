import React from 'react'
import './SimilarItems.css'
import LargeDisplay from '../LargeDisplay/LargeDisplay'
import { items } from '../../asset/data'
import { FaChevronDown } from "react-icons/fa";

const SimilarItems = () => {

  const display = items.find(item=>item.title==="item")

  return (
    <div className='similar_items'>
        <div>
            <div className='other_cart_div'>
              <hr />
              <div>
              <p className='selected_tab'>Overview</p>
              <FaChevronDown className='icon down_sign_cart' size={16} color='#1E1E1E' />
              </div>
              <hr />
              <div>
              <p>Description</p>
              <FaChevronDown className='icon down_sign_cart' size={16} color='#1E1E1E' />
              </div>
              <hr />
              <div>
              <p>Warranty</p>
              <FaChevronDown className='icon down_sign_cart' size={16} color='#1E1E1E' />
              </div>
              <hr />
              <div>
              <p>Reviews</p>
              <FaChevronDown className='icon down_sign_cart' size={16} color='#1E1E1E' />
              </div>
            </div>
            <ul className='list_display'>
                <li>Available in a wide range of colors, patterns, and patterns and themes to appeal to kids.</li>
                <li>Rubber outsoles with good traction to prevent slips and falls.</li>
                <li>Built-in arch support to help maintain healthy foot development.</li>
                <li>Soft insoles and adequate padding to support growing feet.</li>
            </ul>
            <hr />
            <h3>Similar items you may like</h3>
            <div className='toiterate'>
              {
                  display.content.map(disp=>
                    <LargeDisplay disp={disp} />
                )
              }
              </div>
        </div>
    </div>
  )
}

export default SimilarItems
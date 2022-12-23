import React from 'react'
import laptop from '../../assets/laptops.webp'
import mobile from '../../assets/mobiles.jpg'
import cases from '../../assets/cases.webp'
import Navbar from '../../Components/Navbar'
import { Link } from 'react-router-dom'
import mobileaccess from '../../assets/mobileaccesssories.webp'
import './Subcategory.css'
function Subcategory() {
  return (
    
   <div className='subcategories'>
      <Navbar/>
      <div className='subcate' >
        
     <div class="" uk-grid>
        <div class="uk-card uk-card-default">
            <div class="uk-card-media-top">
                <img src={mobile}  alt=""/>
            </div>
            <div class="uk-card-body">
               <h3 class="uk-card-title">All Mobiles Phones</h3>
            </div>
        </div>
        </div>

        <div class="" uk-grid>
        <div class="uk-card uk-card-default">
            <div class="uk-card-media-top">
                <img src={mobileaccess}  alt=""/>
            </div>
            <div class="uk-card-body">
                <h3 class="uk-card-title">All Mobile Accessories</h3>           
            </div>
        </div>
        </div>

        <div class="" uk-grid>
        <div class="uk-card uk-card-default">
            <div class="uk-card-media-top">
                <img src={cases}  alt=""/>
            </div>
            <div class="uk-card-body">
                <h3 class="uk-card-title">Cases,Covers</h3>
                
            </div>
        </div>
        </div>

        <div class="" uk-grid>
        <div class="uk-card uk-card-default">
            <div class="uk-card-media-top">
                <img src={laptop}  alt=""/>
            </div>
            <div class="uk-card-body">
                <h3 class="uk-card-title">Laptops</h3>
                
            </div>
        </div>
        </div>


      </div>
    </div>

  )
}

export default Subcategory
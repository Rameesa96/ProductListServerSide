import React from 'react'
import TV from '../../assets/TV.webp'
import washingmachine from '../../assets/washingmachine.jpg'
import fridge from '../../assets/Refrigerators.webp'
import Navbar from '../../Components/Navbar'
import { Link } from 'react-router-dom'
function SubElectronic() {
  return (
    <div>
         <Navbar/>
      <div className='subcate' >
        
       <div class="" uk-grid>
        <div class="uk-card uk-card-default">
            <div class="uk-card-media-top">
                <img src={TV}  alt=""/>
            </div>
            <div class="uk-card-body">
               <h3 class="uk-card-title">All TVs</h3>
            </div>
        </div>
        </div>

        <div class="" uk-grid>
        <div class="uk-card uk-card-default">
            <div class="uk-card-media-top">
                <img src={washingmachine}  alt=""/>
            </div>
            <div class="uk-card-body">
                <h3 class="uk-card-title">Washing Machines</h3>           
            </div>
        </div>
        </div>

        <div class="" uk-grid>
        <div class="uk-card uk-card-default">
            <div class="uk-card-media-top">
                <img src={fridge}  alt=""/>
            </div>
            <div class="uk-card-body">
                <h3 class="uk-card-title">Fridges</h3>
                
            </div>
        </div>
        </div>

     


      </div> 
    </div>
  )
}

export default SubElectronic
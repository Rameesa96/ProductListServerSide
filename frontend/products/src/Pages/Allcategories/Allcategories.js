import React from 'react'
import Navbar from '../../Components/Navbar'
import laptop from '../../assets/laptops.webp'
import mobile from '../../assets/mobiles.jpg'
import computermobiles from '../../assets/computermobiles.jpg'
import electronic from '../../assets/electronic.jpeg'
import men from '../../assets/men.webp'
import './ALLCategories.css'
import { Link } from 'react-router-dom'
function Allcategories() {
  return (
    <div className='allcategories'>
      <Navbar/>
      <div className='maincate' >
        
      <Link to='/sub'> <div class="" uk-grid>
        <div class="uk-card uk-card-default">
            <div class="uk-card-media-top">
                <img src={computermobiles}  alt=""/>
            </div>
            <div class="uk-card-body">
               <h3 class="uk-card-title">Computer,Mobiles</h3>
            </div>
        </div>
        </div></Link>

       <Link to='/subelect'> <div class="" uk-grid>
        <div class="uk-card uk-card-default">
            <div class="uk-card-media-top">
                <img src={electronic}  alt=""/>
            </div>
            <div class="uk-card-body">
                <h3 class="uk-card-title">TV, Applications, Electronics</h3>           
            </div>
        </div>
        </div></Link>

        <div class="" uk-grid>
        <div class="uk-card uk-card-default">
            <div class="uk-card-media-top">
                <img src={men}  alt=""/>
            </div>
            <div class="uk-card-body">
                <h3 class="uk-card-title">Mens Fashion</h3>
                
            </div>
        </div>
        </div>

      </div>
    </div>

  )
}

export default Allcategories
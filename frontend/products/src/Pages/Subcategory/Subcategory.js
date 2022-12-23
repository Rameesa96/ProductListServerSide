import React,{useEffect,useState}from 'react'
import laptop from '../../assets/laptops.webp'
import mobile from '../../assets/mobiles.jpg'
import cases from '../../assets/cases.webp'
import Navbar from '../../Components/Navbar'

import mobileaccess from '../../assets/mobileaccesssories.webp'
import { Link, useLocation } from 'react-router-dom';
import './Subcategory.css'
import axios from 'axios'
function Subcategory() {
    const photos=[mobile,mobileaccess,laptop]
    const [subcategory,setSubcategory]=useState('')
    const location =useLocation()
    const id=location.pathname.split("/")[2]
    useEffect(()=>{
        axios.get(`http://localhost:5000/category/subcategory/${id}`).then(response=>{
          setSubcategory(response.data)
         
        })
        
          },[])
          console.log(subcategory)
  return (
    
   <div className='subcategories'>
      <Navbar/>
      <div className='subcate' >
      {subcategory && Array.from(subcategory).map((item,index)=>{return(<>  <div class="" uk-grid>
        <div class="uk-card uk-card-default">
           
            <div class="uk-card-body">
               <h3 class="uk-card-title">{item.Name}</h3>
            </div>
        </div>
        </div></>)})}  
   

       


      </div>
    </div>

  )
}

export default Subcategory
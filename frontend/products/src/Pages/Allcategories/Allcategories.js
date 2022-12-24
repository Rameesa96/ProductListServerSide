import React, { useEffect, useState } from 'react'
import Navbar from '../../Components/Navbar'
import laptop from '../../assets/laptops.webp'
import mobile from '../../assets/mobiles.jpg'
import computermobiles from '../../assets/computermobiles.jpg'
import electronic from '../../assets/electronic.jpeg'
import men from '../../assets/men.webp'
import './ALLCategories.css'
import axios from 'axios'
import { Link } from 'react-router-dom'
import CustomizedTables from '../../Components/Table'
function Allcategories() {
const photos=[computermobiles,men,electronic]
  const [category,setCategory]=useState()
  const[product,setProduct]=useState('')
  useEffect(()=>{
axios.get('http://localhost:5000/category').then((response)=>{
  setCategory(response.data)
 
},[])


  },[])

  useEffect(()=>{
    axios.get('http://localhost:5000/product').then((response)=>{
      setProduct(response.data)
     
    },[])
    
    
      },[])
  return (
    <div className='allcategories'>
      <Navbar/>
      <div className='maincate'>
        <div className='cards'>
        {category && Array.from(category).map((item,index)=>{return(  
        <Link to={`/sub/${item._id}`}> <div class="" uk-grid>
        <div class="uk-card uk-card-default">
            <div class="uk-card-media-top">
                <img src={photos[index]}  alt=""/>
            </div>
            <div class="uk-card-body">
               <h3 class="uk-card-title">{item.Name}</h3>
            </div>
        </div>
        </div></Link>
        )})}
    </div>

       {/* <Link to='/subelect'> <div class="" uk-grid>
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
        </div> */}
        <div className='table'> 
 <CustomizedTables className="tablecontent" products={product}/>
 </div>
      </div>
     
    </div>

  )
}

export default Allcategories
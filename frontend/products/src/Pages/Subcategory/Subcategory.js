import React,{useEffect,useState}from 'react'
import laptop from '../../assets/laptops.webp'
import mobile from '../../assets/mobiles.jpg'
import cases from '../../assets/cases.webp'
import Navbar from '../../Components/Navbar'
import CustomizedTables from '../../Components/Table'
import mobileaccess from '../../assets/mobileaccesssories.webp'
import { Link, useLocation } from 'react-router-dom';
import './Subcategory.css'
import axios from 'axios'
function Subcategory() {
    const[product,setProduct]=useState('')
    useEffect(()=>{
      axios.get('http://localhost:5000/product').then((response)=>{
        setProduct(response.data)
       
      },[])
      
      
        },[])
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
      <div className='cards'>
      {subcategory && Array.from(subcategory).map((item,index)=>{return(<> <Link to={`/subsub/${item._id}`}> <div  uk-grid>
        <div class="uk-card uk-card-default" style={{backgroundColor: ' rgb(72, 200, 226)', color: 'white'}}>
           
            <div class="uk-card-body">
               <h3 class="uk-card-title">{item.Name}</h3>
            </div>
        </div>
        
        </div></Link> </>)})}  

        </div>
   
        <div className='table'> 
 <CustomizedTables className="tablecontent" products={product}/>
 </div>
       


      </div>
    </div>

  )
}

export default Subcategory
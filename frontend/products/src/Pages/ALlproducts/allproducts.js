import React,{useEffect,useState} from 'react'
import axios from 'axios'
import Navbar from '../../Components/Navbar'
import { useLocation ,Link} from 'react-router-dom'
import CustomizedTables from '../../Components/Table'

function Allproducts() {
    const location =useLocation()
    const id=location.pathname.split("/")[2]
    const[product,setProduct]=useState('')
    useEffect(()=>{
      axios.get(`http://localhost:5000/product/getbycategory/${id}`).then((response)=>{
        setProduct(response.data)
       
      },[])
      
      
        },[])
  return (
    <div className='allcategories'>
    <Navbar/>
    <div className='maincate'>
      

    
      <div className='table'> 
<CustomizedTables className="tablecontent" products={product}/>
</div>
    </div>
   
  </div>
  )
}

export default Allproducts
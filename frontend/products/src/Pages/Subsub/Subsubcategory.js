import React,{useEffect,useState} from 'react'
import axios from 'axios'
import Navbar from '../../Components/Navbar'
import { useLocation ,Link} from 'react-router-dom'
import CustomizedTables from '../../Components/Table'
function Subsubcategory() {
    const [childcategory,setChildcategory]=useState('')
    const location =useLocation()
    const id=location.pathname.split("/")[2]
    useEffect(()=>{
        axios.get(`http://localhost:5000/category/childcategory/${id}`).then(response=>{
          setChildcategory(response.data)
         
        })
          },[])
          const[product,setProduct]=useState('')
          useEffect(()=>{
            axios.get('http://localhost:5000/product').then((response)=>{
              setProduct(response.data)
             
            },[])
            
            
              },[])
          console.log(childcategory)
  return (
    <div>
           <div className='subcategories'>
      <Navbar/>
      <div className='subcate' >
      <div className='cards'>
      {childcategory && Array.from(childcategory).map((item,index)=>{return(<> <Link to={`/allpro/${item._id}`}> <div  uk-grid>
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
    </div>
  )
}

export default Subsubcategory
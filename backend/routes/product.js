const express = require ("express")
const router = express.Router()
const product = require ('../models/product')

router.post("/",async(req,res)=>{
   
    const products =new product(req.body)
    try{
    const newproducts =await products.save()
        res.status(200).json(newproducts)
    }
    catch(err){
        res.status(500).json(err.message)
    }
    })

module.exports=router
const express = require ("express")
const router = express.Router()
const category = require('../models/Category')
const slugify =require('slugify')
router.post("/",async(req,res)=>{
   
    const categorys =new category(
        {
            Name:req.body.Name,
            slug:slugify(req.body.Name)
        }
    )
    try{
    const newproducts =await categorys.save()
        res.status(200).json(newproducts)
    }
    catch(err){
        res.status(500).json(err.message)
    }
    })



module.exports=router
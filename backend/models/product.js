const mongoose =require('mongoose')
const productschema = mongoose.Schema({
    Name:{
        type:String
    },
    Price:{
        type:String
    },
     Maincategory:{
      type:String
    },
    SubCategory:{
        type:String
    },
    SubsubCategory:{
        type:String
    },
    featured:{
        type:Boolean,
        default:false
    }
})
module.exports = mongoose.model("ecommerce",productschema)
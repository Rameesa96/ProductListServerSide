const mongoose = require('mongoose')
const CategorySchema = mongoose.Schema({
    Name:{
        type:String,
        require:true,
        trim:true
       
    },
    slug:{
        type:String,
        unique:true,
        required:true
    },
    Parentid:{

    }
})
module.exports = mongoose.model("category",CategorySchema)
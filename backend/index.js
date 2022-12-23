const express = require('express')
const mongoose =require('mongoose')
const app =express()
const productroute = require("./routes/product")
const categoryroute =require("./routes/category")

mongoose.connect('mongodb+srv://rami:1234@product.bwuyfeg.mongodb.net/?retryWrites=true&w=majority')
mongoose.connection.on("connected",()=>{
    console.log("mongodb connected")
})
mongoose.connection.on("error",()=>{
    console.log("mongodb disconnected")
})

app.use(express.json())


app.use('/product',productroute)
app.use('/category',categoryroute)
app.listen(5000,()=>{
    console.log("server started")
})
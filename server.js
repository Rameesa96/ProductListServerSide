const express = require('express')
const mongoose =require('mongoose')
const path =require("path")
const app =express()
require("dotenv").config()

const productroute = require("./routes/product")
const categoryroute =require("./routes/category")
const bodyparser =require("body-parser")
const connectionString = process.env.DATABASE_URL;
const cors=require('cors')
mongoose.connect(connectionString)
mongoose.connection.on("connected",()=>{
    console.log("mongodb connected")
})
mongoose.connection.on("error",()=>{
    console.log("mongodb disconnected")
})
const port = process.env.PORT

app.get('/', function (req, res) {
  res.send("server running")
});
app.use(cors())
app.use(express.json())
app.use(bodyparser.urlencoded())

app.use('/product',productroute)
app.use('/category',categoryroute)

app.listen(port,()=>{
    console.log(`server started in ${port}`)
})
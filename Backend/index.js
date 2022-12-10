const express = require("express")
const cors = require("cors")
const mongoose = require('mongoose')
const register = require('./Routes/register')
const Login = require('./Routes/Login')
const products = require("./products")
const app = express()
require('dotenv').config()
app.use(express.json())
app.use(cors())
app.use("/api/register",register)
app.use("/api/Login",Login)
app.get("/products", (req, res)=>{
    res.send(products)
})
 
const port = process.env.PORT || 3001
const url = process.env.DB_URL
app.listen(port, console.log(`Server running on port ${port}`))
mongoose.connect(url,{
    useNewUrlParser:true,
    useUnifiedTopology: true,
}).then(()=> console.log("Mongo connection successfull"))
.catch((err)=> console.error("MongoDB connection failed ", err.message));

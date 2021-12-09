//Basic packages
const express = require('express')
const bodyParser = require('body-parser');
require('dotenv').config()

//Session management packages
const cors=require("cors")
const cookieParser=require("cookie-parser")


//Create an app using express
const app = express()



//Some configurations
const port = 5000
app.use(express.urlencoded({extended : true}));
app.use(express.json())
app.use(cors({
  origin:["http://88.200.63.148:5000"],
  methods:["GET", "POST"],
  credentials:true
}))
app.use(cookieParser())




//Import opur custom modules-controllers
const novice= require("./routes/novice")
const users=require("./routes/users")
//Routes



app.use('/novice', novice);
app.use('/users', users)

///App listening on port
app.listen(process.env.PORT || port, ()=>{
  console.log(`Server is running on port: ${process.env.PORT || port}`)
})




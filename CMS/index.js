//Useful packages
const express = require('express')
require('dotenv').config()

//Create an app using express
const app = express()

//Some configurations
const port = 5000
app.use(express.json())

//Import opur custome modules/controllers
const novice= require("./routes/novice")
app.use('/api/novice', novice);

///App listening on port
app.listen(process.env.PORT || port, ()=>{
  console.log(`Server is running on port: ${process.env.PORT || port}`)
})




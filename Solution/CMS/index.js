const express=require('express')
require('dotenv').config()
const app=express()
const port=5000


//My custom routes
const novice =require('./routes/novice')
const conn=require('./DB/dbConn')
//when client visits home
app.get('/', (req,res)=>{
    res.send("Hola")
    res.end()  
})

app.use('/novice',novice)

app.listen( process.env.PORT || port,()=>{
    console.log(`Server is running on port: ${process.env.PORT || port}`)
})
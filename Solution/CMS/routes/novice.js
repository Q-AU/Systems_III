const express=require('express')
const novice= express.Router()



novice.get('/',(req,res)=>{
    res.send("You have reached novice")
    res.end()
})

module.exports=novice
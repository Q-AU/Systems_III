const express= require("express")

const novice = express.Router();
const DB=require('../DB/dbConn.js')

//Gets all the news in the DB 
novice.get('/', async (req,res, next)=>{
    try{
        var queryResult=await DB.allNovice();
        res.json(queryResult)
    }
    catch(err){
        console.log(err)
        res.sendStatus(500)
    }
})

//Gets one new from DFB

 novice.get('/:id', async (req,res, next)=>{
    try{
        var queryResult=await DB.oneNovica(req.params.id)
        res.json(queryResult)
    }
    catch(err){
        console.log(err)
        res.sendStatus(500)
    }
}) 



module.exports=novice
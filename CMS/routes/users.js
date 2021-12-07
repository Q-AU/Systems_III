const express= require("express")

const users = express.Router();
const DB=require('../DB')

app.post('/', (req, res) => {
    var username = req.body.username;
	var password = req.body.password;
    if (username && password) 
    {
        try{
            var queryResult=await DB.AuthUser(username,password);
            res.json(queryResult)
        }
        catch(err){
            console.log(err)
            res.sendStatus(500)
        }    
    }
    else
    {
        res.send('Please enter Username and Password!');
		res.end();
    }
   
    
});



module.exports=novice
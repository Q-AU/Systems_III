const express= require("express")
const session = require("express-session")

const users = express.Router();
const DB=require('../DB')

//users.set('trust proxy', 1) // trust first proxy
users.use(session({
  secret:"somesecret",
  resave:false, 
  saveUninitialized:true,
  cookie:{}

}))


  


users.post('/login', async (req, res) => {
    
    var username = req.body.username;
	var password = req.body.password;
    if (username && password) 
    {
        try
        {
         let queryResult=await DB.AuthUser(username);

        
                if(queryResult.length>0)
                {
                    if(password===queryResult[0].user_password)
                    {
                    req.session.user=queryResult;
                    console.log(req.session.user)
                     console.log(queryResult)
                     console.log("SESSION VALID");
                    
                     //res.redirect('/');
                    }
                    else
                    {
                        console.log("INCORRECT PASSWORD");
                    }
                }else 
                {
                 console.log("USER NOT REGISTRED");   
                }
    
               
            
            res.end();

        }
        catch(err){
            console.log(err)
            res.sendStatus(500)
        }    
    }
    else
    {
        console.log("Please enter Username and Password!")
		res.end();
    }
   
    
});



module.exports=users
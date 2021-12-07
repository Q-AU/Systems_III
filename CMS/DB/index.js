var mysql = require('mysql2')

var  conn = mysql.createConnection({
   
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS, 
    database: 'qcodeigniter',

  })

  let dataPool={}
  
dataPool.allNovice=()=>{
  return new Promise ((resolve, reject)=>{
    conn.query(`SELECT * FROM news`, (err,res)=>{
      if(err){return reject(err)}
      return resolve(res)
    })
  })
}

dataPool.oneNovica=(id)=>{
  return new Promise ((resolve, reject)=>{
    conn.query(`SELECT * FROM news WHERE id = ?`, id, (err,res)=>{
      if(err){return reject(err)}
      return resolve(res)
    })
  })
}

dataPool.AuthUser=(username, password)=>
{
  return new Promise ((resolve, reject)=>{
    conn.query('SELECT * FROM user_login WHERE username = ? AND password = ?', [username, password], (err,res, fileds)=>{
      if(err){return reject(err)}
      return resolve(res)
    })
  })  
		conn.query('SELECT * FROM user_login WHERE username = ? AND password = ?', [username, password], (error, results, fields) => {
			if (results.length > 0) {
				req.session.loggedin = true;
				req.session.username = username;
				res.redirect('/home');
			} else {
				res.send('Incorrect Username and/or Password!');
			}			
			res.end();
		});
	
}

/*   connection.connect((err) => {
      if(err){
          console.log("ERROR: " + err.message);
          return;    
      }
      console.log('Connection established');
    })
  
  
   */

  
module.exports=dataPool
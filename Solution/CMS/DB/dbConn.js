const mysql=require("mysql2")

const conn=mysql.createConnection({
    host:process.env.DB_HOST,
    user:process.env.DB_USER,
    password:process.env.DB_PASSWORD,
    database:"Qcodeigniter"
})

conn.connect((err)=>{
    if(err){
        console.log("Error: " + err.message)
        return
    }
    console.log("Connection established :)")
})

module.exports=conn
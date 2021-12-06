const express = require('express')
require('dotenv').config()

const app = express()
const port = 3000

///MYSQL STUFF

const dbConection=require("./DB/dbConnection")


app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
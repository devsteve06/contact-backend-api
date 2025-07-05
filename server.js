const express = require('express')
require('dotenv').config()


const app  = express()

app.get('/api/',(req,res)=>{
    
})

const port = process.env.PORT | 5000

app.listen(port, ()=> console.log(`server is running on port ${port}`))
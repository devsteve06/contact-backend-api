const express = require('express')
require('dotenv').config()
const app  = express()

const port = process.env.PORT || 5000

//added middleware
app.use('/api/contacts',require('./routes/ContactRoutes'))


app.listen(port, ()=> console.log(`server is running on port ${port}`))
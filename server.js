const express = require('express')
const errorHandler = require('./middleware/ErrorHandler')
require('dotenv').config()
const app  = express()

const port = process.env.PORT || 5000

//middleware
app.use(express.json()) //handles req from client to server
app.use('/api/contacts',require('./routes/ContactRoutes'))
app.use(errorHandler) //custom middleware for error handling


app.listen(port, ()=> console.log(`server is running on port ${port}`))
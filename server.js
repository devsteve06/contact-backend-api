const express = require('express')
const errorHandler = require('./middleware/ErrorHandler')
const connectDb = require('./config/dbConfig')
require('dotenv').config()

const app  = express()

const port = process.env.PORT || 5000

connectDb() //instance of connection using mongodb
//middleware
app.use(express.json()) //handles req from client to server
app.use('/api/contacts',require('./routes/ContactRoutes'))
app.use('/api/users',require('./routes/userRoutes'))
app.use(errorHandler) //custom middleware for error handling


app.listen(port, ()=> console.log(`server is running on port ${port}`))
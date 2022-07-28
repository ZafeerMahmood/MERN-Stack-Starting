//imports via require
const express = require('express')
const dotenv = require('dotenv').config()
const port = process.env.PORT || 7000
// initial initializing expresss
const app = express()

app.use('/api/goals', require('./routes/goalRoutes'))

app.listen(port,()=> console.log(`Sever Started on port ${port}`))

    

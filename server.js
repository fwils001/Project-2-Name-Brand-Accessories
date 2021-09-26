  require("dotenv").config()
  const session = require('express-session')
   const express = require('express')
   const app = express()
   const port = 3000
const methodOverride = require('method-override')

const mongoose = require('mongoose')

const mongoURI = process.env.MONGODB_URI

const db = mongoose.connection

mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}, () => {
    console.log('database connected')
})
db.on('error', (err) => { console.log('ERROR: ', err) })
db.on('connected', () => { console.log('mongo connected') })
db.on('disconnected', () => { console.log('mongo disconnected')})
   
   app.use(methodOverride('_method'))
   
   app.use(express.static('public'))

   app.use(express.json())
   
   app.use(express.urlencoded({extended:true }))

   app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false
  }))

   app.use((req, res, next) => {
    console.log("Here is the session in the custom app-level middleware.")
    console.log(req.session)
    next()
  })
   

   const itemController = require('./controllers/itemController.js')
    app.use('/items', itemController)

    const userController = require('./controllers/userController')
    app.use('/users', userController)


app.listen(3000, () => {
 console.log("Server is running on port 3000")
}) 
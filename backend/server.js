const express = require('express')

const app = express()

const cors =require('cors')
const connecdb = require('./config/db')
const authRouter= require('./routes/authuser')
const postRouter= require('./routes/postroute')
// ajout partie contactlist
require('dotenv').config()

const port = process.env.PORT || 5000 
connecdb()
app.use(cors())

app.use(express.json())

// path genral de l'autnetification

 app.use('/auth',authRouter)

//path ggeneral pour les post
app.use('/admin_post',postRouter)



app.listen(port,(err)=>{
    err?console.log(err):console.log(`you are connected to the port ${port}`)
})








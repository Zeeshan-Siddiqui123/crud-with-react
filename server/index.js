const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')

const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.post('/create', (res, req)=>{
    res.render('CreateUser')
})

app.listen(3000)
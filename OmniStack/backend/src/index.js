const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const path = require('path')

const app = express()
const server = require('http').Server(app)
const io = require('socket.io')(server)

mongoose.connect('mongodb+srv://admin:admin@cluster0-kvcj2.gcp.mongodb.net/test?retryWrites=true&w=majority', {
  useNewUrlParser: true  
})
//websocket configuration for all controllers
app.use((req, res, next) => {
    req.io = io

    next()
})
//Permit access to front end and all apps 
app.use(cors())
//Access images by passing path folder
app.use('/files', express.static(path.resolve(__dirname, '..', 'uploads', 'resized')))

app.use(require('./routes.js'))

server.listen(3003)


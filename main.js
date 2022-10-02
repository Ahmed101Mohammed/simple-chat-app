// Medules:
const express = require('express');
const http = require('http');
const path = require('path');
const socketIo =  require('socket.io');
require('dotenv').config();

// Prepare the server:
const app = express();
const server = http.createServer(app);
const io = new socketIo.Server(server);

// MiddlewaresL:
app.use(express.static(path.join(__dirname,'public')));

// Routes:
app.use('/||home',require(path.join(__dirname,'routers','home.js')));

// io server:
io.on('connection',(socket)=>{
    console.log('a user connected');
    
    socket.on('chat message', (mssg)=>{
        console.log('Message:',mssg);
    })
    socket.on('disconnect', ()=>{
        console.log('The user is disconnecting')
    })
})
// Run the server:
const Port = process.env.PORT || 8000; 
server.listen(Port,()=>{
    console.log(`The Server is runing at port ${Port}`);
})

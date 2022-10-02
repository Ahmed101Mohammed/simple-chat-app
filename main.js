// Medules:
const express = require('express');
const http = require('http');
const path = require('path');
const socketIo =  require('path');
require('dotenv').config();

// Prepare the server:
const app = express();
const server = http.createServer(app);
const io = new socketIo.server(server);

// MiddlewaresL:
app.use(express.static(path.join(__dirname,'public')));

// Routes:
app.use('/||home',require(path.join(__dirname,'routers','home.js')));

// io server:
io.on('connect',(socket)=>{
    console.log('a user connected');
})
// Run the server:
const Port = process.env.PORT || 8000; 
server.listen(Port,()=>{
    console.log(`The Server is runing at port ${Port}`);
})

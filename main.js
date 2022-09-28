// Medules:
const express = require('express');
const http = require('http');
const path = require('path');
require('dotenv').config();

// Prepare the server:
const app = express();
const server = http.createServer(app);

// Routes:
app.use('/||home',require(path.join(__dirname,'routers','home.js')));

// Run the server:
const Port = process.env.PORT || 8000; 
server.listen(Port,()=>{
    console.log(`The Server is runing at port ${Port}`);
})

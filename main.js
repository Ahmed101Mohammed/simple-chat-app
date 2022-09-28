// Medules:
const express = require('express');
const http = require('http');
require('dotenv').config();
// prepare the server:
const app = express();
const server = http.createServer(app);

// run the server:
const Port = process.env.PORT || 8000; 
server.listen(Port,()=>{
    console.log(`The Server is runing at port ${Port}`);
})

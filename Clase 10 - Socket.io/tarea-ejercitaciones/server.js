const express = require('express');
const app = express();
const http = require('http').Server(app)
const io = require('socket.io')(http)

http.listen(8080, ()=> {
    console.log("Escuchando en puerto 8080");
})
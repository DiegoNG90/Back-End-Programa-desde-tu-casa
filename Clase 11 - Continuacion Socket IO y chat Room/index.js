const express = require('express');
const { Http2ServerRequest } = require('http2');
const app = express();
const http = require('http').Server(app);
const io = require('socket.io');

http.listen(8080, () => {
    console.log("Puerto escuchando en 8080");
})
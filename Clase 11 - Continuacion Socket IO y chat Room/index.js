const express = require('express');
const http = require('http');
const app = express();
const http = require('http').Server(app);
const io = require('socket.io')();

//app.use(express.static(path.join(__dirname+'public'))); INVESTIGAR
//Con ésta línea, pedimos a express que use la carpeta public para ir a buscar los archivos estaticos
app.use(express.static('public'));


//Configuramos el io desde el lado del back
io.on('connection', (socket) => {
    console.log("Un usuario se ha logueado");

    socket.on('mensaje chat', (msj) => {
        console.log(msj);
    });

    //configuramos la desconexion del lado del cliente
})


//Levanto el Server
http.listen(8080, () => {
    console.log("Puerto escuchando en 8080");
})
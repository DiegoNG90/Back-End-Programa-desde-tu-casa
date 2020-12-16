const express = require('express');
const app = express();
const http = require('http').Server(app)
const io = require('socket.io')(http)

app.use(express.static('public'));

//configuramos el login a la sala chat
io.on('connection', (socket)=>{
    //Chequeamos que el usuario haya ingresado
    console.log("Usuario conectado");
    
    //recibimos el mensaje del lado del cliente
    socket.on('mensaje', (msg) =>{
        console.log(msg);
    })
    //configuramos el logut
    socket.on('disconnect', ()=>{
        console.log("Usuario desconectado");
    })
})

http.listen(8080, ()=> {
    console.log("Escuchando en puerto 8080");
})

/* EJERCICIO 1.
¿Cuál es la diferencia entre los eventos emit y on?
 
La diferencia es que emit EMITE el evento, mientras que ON setea para escuchar el evento.*/


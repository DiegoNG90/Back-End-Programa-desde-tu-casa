const express = require('express');
const app = express();
//Ésta manera es la misma o equivalente a:
// const app = require('express')();

//Al servidor que creamos le vamos a anexar OTROS protocolos: TCP y HTTP
const http = require('http').Server(app);
//requerimos io y ejecutamos http:
const io = require('socket.io')(http);

// app.get('/', (req,res) =>{
//     res.sendFile(__dirname+'/index.html')
// })

app.use(express.static('public'));

//Trabajamos con io.on
io.on('connection', (socket) => {
    console.log('usuario conectado. ID: ' + socket.id);
    socket.on('disconnect', () => {
        console.log("usuario se ha desconectado");
    })
})

http.listen(8080, () => {
    console.log("Escuchando el servidor 8080");
})
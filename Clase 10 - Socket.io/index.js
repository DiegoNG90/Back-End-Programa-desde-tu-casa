//Ésta manera es la misma o equivalente a:
// const express = require('express);
//const app = express():
const app = require('express')();

//Al servidor que creamos le vamos a anexar OTROS protocolos: TCP y HTTP
const http = require('http').Server(app);
//requerimos io y ejecutamos http:
const io = require('socket.io')(http);

app.get('/', (req,res) =>{
    res.sendFile(__dirname+'/index.html')
})

//Trabajamos con io.on
io.on('connection', (socket) => {
    console.log('usuario conectado');
})

http.listen(8080, () => {
    console.log("Escuchando el servidor 8080");
})
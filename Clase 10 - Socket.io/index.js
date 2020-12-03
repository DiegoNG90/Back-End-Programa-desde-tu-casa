const express = require('express');
const app = express();
//Al servidor que creamos le vamos a anexar OTROS protocolos: TCP y HTTP
const http = require('http').Server(app);
//requerimos io y ejecutamos http:
const io = require('socket.io')(http);

app.get('/', (req,res) =>{
    res.send(`<h1>Hola!</h1>`)
})
app.listen(8080, () => {
    console.log("Escuchando el servidor 8080");
})
const socket = io();

//Emitimos un evento con un mensaje: "Hola"
socket.emit('mensaje chat', 'Hola');

function enviarMensaje()
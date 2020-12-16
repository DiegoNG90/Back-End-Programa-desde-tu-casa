//configuramos socket desde el cliente
const socket = io();

//emitimos msg
socket.emit('mensaje', "Hola");
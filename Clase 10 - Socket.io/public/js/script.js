const socket = io();
//acá, que estamos del lado del cliente, estamos recibiendo el mensaje que enviamos desde el servidor
socket.on('mensaje', (data) => {
    document.querySelector('#chat-box').innerHTML += `<p>ID de usuario: ${data}</p>`
    // console.log(data);
})

function enviarData(){
    let inputData = document.querySelector('#chat').value;
    // console.log(inputData);
    socket.emit('mensaje', inputData)
}

document.querySelector('button').addEventListener('click', enviarData);
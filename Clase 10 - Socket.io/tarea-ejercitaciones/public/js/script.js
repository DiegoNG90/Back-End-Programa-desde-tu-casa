//configuramos socket desde el cliente
const socket = io();

//emitimos msg
// socket.emit('mensaje', "Hola");


const enviarObjeto = () => {
    const miObjeto = {nombre: "Diego", edad: 30};
    socket.emit('objeto', miObjeto);
}
const $nodoBtnBack = document.querySelector('.btn-danger');

$nodoBtnBack.addEventListener('click', enviarObjeto);


/*EJERCICIO 2.
Hagamos un chat!
Paso 1
Hace una pantalla en el lado del cliente que contenga un botón únicamente.
Generá un evento que se disparará cuando presiones el botón que recién creaste.
Asignale un nombre y, al presionarlo, tendrá que mandarle el siguiente objeto al
servidor:
{
nombre: “tuNombre”,
edad: tuEdad
}
*/

/* /*Paso 3.
Generá un párrafo que informe que una persona se conectó. */

const $nodoParrafo = document.querySelector('#user-conectado');

socket.on('user conectado', (data)=> {
    $nodoParrafo.innerText = data;
})
/* Paso 4.
Generá un append a tu HTML del lado del cliente para que todos puedan ver el
mensaje que escribiste (Por ahora solo podrán ver “tuNombre dice...” */
const enviarMensaje = () => {
    const $nodoInput = document.querySelector('.form-control').value;
    socket.emit('mensaje', $nodoInput);
}

const $nodoBtnMsg = document.querySelector('.btn-success');
$nodoBtnMsg.addEventListener('click', enviarMensaje);
const $nodoChatDiego = document.querySelector('#chat-diego');
socket.on('mensaje', (data)=>{
    $nodoChatDiego.innerHTML += `<p>${data}</p>`;
})

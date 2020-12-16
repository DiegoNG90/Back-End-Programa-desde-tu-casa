//configuramos socket desde el cliente
const socket = io();

//emitimos msg
// socket.emit('mensaje', "Hola");

function chequearYBorrarErrores(input){
    //Chequear si hay errores (li) antes y si hay, eliminarlos, para chequear con 0 li (errores):
    while(input.firstChild){
        input.removeChild(input.firstChild);
    };
}

const enviarObjeto = () => {
    //5)
    const $nodoUserName = document.querySelector('#nombre-user').value;
    const $nodoInput = document.querySelector('#msg').value;
    const miObjeto = {nombre: `${$nodoUserName}`, edad: `${$nodoInput}`};
    //6
    const $errores = document.querySelector('#errores');
    const $error = document.createElement('li');
    if ($nodoInput && $nodoUserName) {
        chequearYBorrarErrores($errores);
        socket.emit('objeto', miObjeto);
    } else {
        $error.style.color = "red";
        $error.innerHTML = `<p>El campo de nickname y/o de mensaje está/n vacío/s. Asegurese de completar ambos para empezar a chatear</p>`
        $errores.appendChild($error);
        console.log();
    }
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
    $nodoParrafo.style.fontStyle = "italic";
    $nodoParrafo.innerText = data;
})
/* Paso 4.
Generá un append a tu HTML del lado del cliente para que todos puedan ver el
mensaje que escribiste (Por ahora solo podrán ver “tuNombre dice...” */
const enviarMensaje = () => {
    const $nodoInput = document.querySelector('#msg').value;
    socket.emit('mensaje', $nodoInput);
}

const $nodoBtnMsg = document.querySelector('.btn-success');
$nodoBtnMsg.addEventListener('click', enviarMensaje);
const $nodoChatDiego = document.querySelector('#chat-diego');
socket.on('mensaje', (data)=>{
    $nodoChatDiego.innerHTML += `<p>${data}</p>`;
})
/*
Paso 5
Agregá dos input type text, el primero se usará para agregar el nombre de un
usuario mientras que el segundo será el mensaje que queremos transmitir. Luego
adaptá el punto 1 para que deban enviarse ambos valores.*/

/* Paso 6
Validá que no puedas enviar un mensaje si antes no escribiste ambos inputs. */

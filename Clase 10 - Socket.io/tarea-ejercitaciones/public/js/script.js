//configuramos socket desde el cliente
const socket = io();

//emitimos msg
// socket.emit('mensaje', "Hola");


const enviarObjeto = () => {
    const miObjeto = {nombre: "Diego", edad: 30};
    socket.emit('objeto', miObjeto);
}
const $nodoBtn = document.querySelector('.btn-danger');

$nodoBtn.addEventListener('click', enviarObjeto);


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
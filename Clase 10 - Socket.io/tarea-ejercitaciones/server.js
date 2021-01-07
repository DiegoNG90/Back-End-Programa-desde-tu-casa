const express = require('express');
const { on } = require('process');
const app = express();
const http = require('http').Server(app)
const io = require('socket.io')(http)

app.use(express.static('public'));

//configuramos el login a la sala chat
io.on('connection', (socket)=>{
    //Chequeamos que el usuario haya ingresado
    console.log("Usuario conectado");

    io.emit('user conectado', `Un usuario se ha conectado`);
    
    //2) recibimos el objeto del lado del cliente
    socket.on('objeto', (data) =>{
        console.log(`${data.nombre} dice: "${data.edad}"`);
    })

    //4) recibimos el mensaje del lado del cliente
    socket.on('mensaje', (data)=> {
        console.log(`Diego dice "${data.mensaje}"`);
        io.emit('mensaje', `${data.user} dice ${data.mensaje}`)
    })
    //7)
    socket.on('tecleando', (data) => {
        socket.broadcast.emit('escribiendo', data);
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

/*Paso 2.
El servidor obtendrá el evento y mostrará el objeto por consola:
“tuNombre dice: Tengo tuEdad años”*/

/*Paso 3.
Generá un párrafo que informe que una persona se conectó. */

/* Paso 4.
Generá un append a tu HTML del lado del cliente para que todos puedan ver el
mensaje que escribiste (Por ahora solo podrán ver “tuNombre dice...” */

/* Paso7
Cuando un usuario esté escribiendo debe aparecer el mensaje “<tuNombre> está
escribiendo”. */


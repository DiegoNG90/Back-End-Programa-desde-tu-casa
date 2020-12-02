/*Middlewares.
EJERCICIO 1.
Crear un middleware que nos informe a qué hora se genera una petición. Usá new
Date con el método toLocaleTimeString  */

const express = require('express');
const app = express();
/*
let evento; 

const myMiddleware = (req,res, next)=> {
    evento = new Date().toLocaleTimeString();
    console.log(evento);

    //No se puede hacer; ésto no es estrictamente una funcion.
    // return event.toLocaleDateString()
    next();
}

app.use(myMiddleware);

app.get('/', (req,res) =>{
    console.log(evento);
    res.send(evento);
})


app.listen(3000, () => {
    console.log("Escucnado el puerto 3000");
})
*/

/* EJERCICIO 2.
Generar un middleware llamado logged que nos dé el método, la ruta y el código de
estado que esté utilizando el sistema en ese momento. */


const logged = (req,res,next) => {
    const ruta = req.url;
    const codigoEstado = res.statusCode;
    const metodo = req.method;
    console.log("ruta: ", ruta, "codigoEstado: ", codigoEstado, "metodo: ", metodo);
    next();
}

app.use(logged);

app.listen(8080, () => {
    console.log("Escuchando puerto 8080");
})
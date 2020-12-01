/*Middlewares.
EJERCICIO 1.
Crear un middleware que nos informe a qué hora se genera una petición. Usá new
Date con el método toLocaleTimeString  */

const express = require('express');
const app = express();

let evento; 

const myMiddleware = (req,res, next)=> {
    evento = new Date().toLocaleDateString();
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

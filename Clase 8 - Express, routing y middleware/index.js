/*EJERCICIO 1.
Generar el siguiente árbol de carpetas con Powershell (comando mkdir para crear y
cd para moverte entre ellas) y navegá a través de ellas:
Clase 27
Ejercicio1
Src
Units
*/

/*EJERCICIO 2.
Crear la ruta con el método get
/api/usuarios
Y nos tiene que mostrar por pantalla
“Estás tomando los usuarios desde el método get”  */

const express = require('express');
const app = express();

// app.get('/api/usuarios', (req,res) =>{
//     res.send("Estás tomando los usuarios desde el método get");
// });


/* EJERCICIO 3.
Modificar el ejercicio anterior para que devuelva un JSON
{
“usuario”: “uss1”,
“password”: “contrasenia123”
} */

//ésta línea va a permitir a EXPRESS leer el JSON, interpretarlo y mostrarlo
app.use(express.json());

// app.get('/api/usuarios', (req,res) =>{
//     const user = {
//         usuario: "uss1",
//         password: "contrasenia123"
//     }
//     res.send(user);
//     console.log(user);
// });

//Ésta es la respuesta correcta
// app.get('/api/usuarios', (req,res) =>{
//     res.json({
//         "usuario": "uss1",
//         "password": "contrasenia123"
//     })
// });

/*EJERCICIO 4.
Agregar el parámetro nombreusuario al final de la ruta
/api/usuarios/
Para hacerla dinámica. */


// app.get('/api/usuarios/:nombreusuario', (req,res) => {
//     res.json({
//         "usuario": "uss1",
//         "password": "contrasenia123",
//         "nombreusuario": `${req.params.nombreusuario}`
//     })

//     // Al enviar la res.json, la res.send no se activa/envia
//     // res.send(`<h1>Hola ${req.params.nombreusuario}</h1>`);
// })

/* EJERCICIO 5.
Primero mostrá los datos que obtenes de la ruta creada en el punto anterior.
Luego reemplazá en el JSON creado en el punto 3 uss1 por el contenido del
parámetro nombreusuario.  */

// app.get('/api/usuarios/:nombreusuario', (req,res) => {
//     res.json({
//         "usuario": `${req.params.nombreusuario}`,
//         "password": "contrasenia123",
//         "nombreusuario": `${req.params.nombreusuario}`,
//         "ruta": __dirname
//     })
// })

// app.listen(8080, () =>{
// console.log("Servidor 8080 escuchando");
// })

/* Middlewares.
EJERCICIO 6.
Crear un middleware que nos informe a qué hora se genera una petición. Usá new
Date con el método toLocaleTimeString */

// const express = require('express');
// const app = express();

let evento; 

const myMiddleware = (req,res, next)=> {
    evento = `La petición se realiza a las:  ${new Date().toLocaleTimeString()}`;
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

const port = 3000;
app.listen(port, () => {
    console.log("Escuchando el puerto 3000");
})



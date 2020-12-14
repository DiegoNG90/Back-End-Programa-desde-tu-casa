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


// const logged = (req,res,next) => {
//     const ruta = req.url;
//     const codigoEstado = res.statusCode;
//     const metodo = req.method;
//     console.log("ruta: ", ruta, "codigoEstado: ", codigoEstado, "metodo: ", metodo);
//     next();
// }

// app.get('/', (req,res) => {
//     res.send("Hola Mundo!")
// })
// app.use(logged);

// app.listen(8080, () => {
//     console.log("Escuchando puerto 8080");
// })

/*EJERCICIO 3.
Generar un MW que devuelva por el navegador “Error 404: Página no encontrada”. */

const error404 = (req,res,next) => {
    res.status(404).send("Error 404: Página no encontrada")
    next();
}

app.get('/', (req,res) => {
    res.send("Bienvenido!Acá si podes estar, porque ésta pagina está configurada!")
})

app.get('/nosotros', (req,res) => {
    res.send("Somos un equipo de estudiantes de programación.")
})
app.use(error404);

app.listen(8080, () => {
    console.log("Escuchando puerto 8080");
})

//Ésta solución "funciona", pero no me deja contento; porque acá sólo aclaro una ruta, que es la root. Si tuviera 10, 15, 30 o más rutas, cómo sería?


/* EJERCICIO 4.
Creá una función que setee el puerto 5500. */

//2 dudas: 1)throw er; // Unhandled 'error' event?
//2) Por qué no me toma el next?


// app.get('/', (req,res) => {
//     res.send("Hola, se creo el puerto 5500 y ahora ves ésto")
// })

// const setearPuerto3000 = (req,res,next) => {
//     app.listen(3000, ()=> {
//         console.log("Escuchando puerto 3000");
//     })
//     // next();
// }

// app.use(setearPuerto3000)

// setearPuerto3000();

//Archivos estáticos.

/* EJERCICIO 5.
Generá una carpeta static y dentro un archivo index.html, que contendrá un título y
un párrafo.
Agregá los middlewares necesarios desde tu app.js para “levantar” este index. */

// app.use(express.static('static'));

// app.listen(8080, ()=> {
//     console.log("Escuchando puerto 8080");
// });

/* Ejercicio 6.
Agregá dentro de /static un directorio llamado css y dentro el archivo styles.css.
Dentro de este archivo agregá una clase que le genere lo siguientes estilos:
A nivel general poné el margin en cero e importá la fuente Roboto (desde Google
Fonts).
Al título déjalo centrado y con negrita.
Al párrafo ponele un color de fondo y un color de fuente que contraste. */

/* Ejercicio 7.
Agregá en /static una carpeta /js que contenga un archivo llamado index.js
Este archivo agregá un temporizador (usando la función setTimeout) que tras
transcurrir 2 segundos me cambie el contenido del título. */


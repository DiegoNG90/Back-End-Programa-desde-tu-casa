const express = require('express');
const app = express();
const alumno_controlador = require('./controlers/controllers.js');

//Rutas y Controladores 

app.get('/', alumno_controlador.obtenerAlumno); 

//Ahora vamos a aprender a usar MySQL desde éste script, que se ejecuta desde NODEJS



app.listen(8080, ()=> {
    console.log("Servidor escucuando en puerto 8080");
})
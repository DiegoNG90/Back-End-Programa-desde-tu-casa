const express = require('express');
const app = express();
const alumno_controlador = require('./controlers/controllers.js');


//Middlewares
app.use(express.json());
app.use(express.urlencoded())

//Rutas y Controladores 

app.get('/', alumno_controlador.obtenerAlumno); 

app.post('/productos', alumno_controlador.agregarAlumno);


//Ahora vamos a aprender a usar MySQL desde éste script, que se ejecuta desde NODEJS



app.listen(8080, ()=> {
    console.log("Servidor escucuando en puerto 8080");
})
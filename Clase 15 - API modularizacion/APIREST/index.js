const express = require('express');
const app = express();
const alumno_controlador = require('./controlers/controllers.js');


//Middlewares
app.use(express.json());
app.use(express.urlencoded())

//Rutas

app.get('/', alumno_controlador.obtenerAlumno); 

app.post('/alumnos', alumno_controlador.agregarAlumno);

app.delete('/alumnos/:id', alumno_controlador.eliminarAlumno)


app.listen(8080, ()=> {
    console.log("Servidor escucuando en puerto 8080");
})
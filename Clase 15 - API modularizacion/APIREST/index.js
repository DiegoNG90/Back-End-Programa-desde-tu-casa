const express = require('express');
const app = express();
const alumnosRouter = require('./routes/alumnos.js')


//Middlewares
app.use(express.json());
app.use(express.urlencoded())
app.use('/gestoralumnos', alumnosRouter)


//Rutas

// app.get('/', alumno_controlador.obtenerAlumno); 

// app.post('/alumnos', alumno_controlador.agregarAlumno);

// app.delete('/alumnos/:id', alumno_controlador.eliminarAlumno);

// app.put('/alumnos/:id', alumno_controlador.editarAlumno);

app.listen(8080, ()=> {
    console.log("Servidor escucuando en puerto 8080");
})
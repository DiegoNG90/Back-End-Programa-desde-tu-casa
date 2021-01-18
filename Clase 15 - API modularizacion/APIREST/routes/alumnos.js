const express = require('express');
const alumno_controlador = require('../controlers/controllers.js');
const alumnosRouter = express.Router();

alumnosRouter.get('/', alumno_controlador.obtenerAlumno); 

alumnosRouter.post('/alumnos', alumno_controlador.agregarAlumno);

alumnosRouter.delete('/alumnos/:id', alumno_controlador.eliminarAlumno);

alumnosRouter.put('/alumnos/:id', alumno_controlador.editarAlumno);


module.exports = alumnosRouter;
const connectionDb = require('../config/dbConfig.js')



//Controladores
const obtenerAlumno = (req,res) => {
    connectionDb.query('SELECT * FROM t_alumnos', (err, results) => {
        if(err)
            throw err;
        // else{
        //     //console.log(results);
        //     results.forEach((resultado) => {
        //         console.log(resultado.nombre);
        //     })
        // }
        res.send(results);
    })
}

const agregarAlumno = (req, res) => {
    //destructuring:
    // let id = req.body.id;
    // let alumno = req.body.alumno;
    //...y así para los otros 4. En vez de eso, podemos hacer un destructuring:
    let {id, nombre, apellido, email, telefono, curso} = req.body;
    // console.log( req.body );
    connectionDb.query('INSERT INTO `t_alumnos`(`id`, `nombre`, `apellido`, `email`, `telefono`, `curso`) VALUES (?,?,?,?,?,?)',[id, nombre, apellido, email, telefono, curso], (err, results) => {
        if(err)
         throw err;
        res.send("Datos enviados con éxito")
        // console.log(results);
    })
}

const eliminarAlumno = (req, res) => {
    let {id} = req.body;
    console.log( id );
    connectionDb.query('DELETE FROM `t_alumnos` WHERE id = ?',[id], (err, results) => {
        if(err)
        throw err;
        // console.log(results);
        res.send("Alumno eliminado con exito")
    })
}

module.exports = {
    obtenerAlumno,
    agregarAlumno,
    eliminarAlumno
}
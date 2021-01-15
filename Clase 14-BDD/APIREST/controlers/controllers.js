const connectionDb = require('../config/dbConfig.js')

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

module.exports = {obtenerAlumno}
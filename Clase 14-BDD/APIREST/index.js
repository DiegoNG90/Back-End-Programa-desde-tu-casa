const express = require('express');
const app = express();
const mysql = require('mysql');

//Creamos la conexion a la base de datos
const connectionDb = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "PDC"
})

//Chequear si funciona la conexion
connectionDb.connect( (err) => {
    if (err){
        throw err;
    }
    else{
        console.log("Conexion exitosa");
    }
} )

//Ahora vamos a aprender a usar MySQL desde éste script, que se ejecuta desde NODEJS

connectionDb.query('SELECT * FROM t_alumnos', (err, results) => {
    if(err){
        throw err;
    }else{
        //console.log(results);
        results.forEach((resultado) => {
            console.log(resultado.nombre);
        })
    }
})

app.listen(8080, ()=> {
    console.log("Servidor escucuando en puerto 8080");
})
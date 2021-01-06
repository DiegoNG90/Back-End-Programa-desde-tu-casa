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

app.listen(8080, ()=> {
    console.log("Servidor escucuando en puerto 8080");
})
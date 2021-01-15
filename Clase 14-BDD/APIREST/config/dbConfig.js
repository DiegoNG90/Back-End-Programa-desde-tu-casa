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
} );

module.exports = connectionDb; 
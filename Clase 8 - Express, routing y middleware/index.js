/*EJERCICIO 1.
Generar el siguiente árbol de carpetas con Powershell (comando mkdir para crear y
cd para moverte entre ellas) y navegá a través de ellas:
Clase 27
Ejercicio1
Src
Units
*/

/*EJERCICIO 2.
Crear la ruta con el método get
/api/usuarios
Y nos tiene que mostrar por pantalla
“Estás tomando los usuarios desde el método get”  */

const express = require('express');
const app = express();

// app.get('/api/usuarios', (req,res) =>{
//     res.send("Estás tomando los usuarios desde el método get");
// });

app.listen(8080, () =>{
    console.log("Servidor 8080 escuchando");
})
/* EJERCICIO 3.
Modificar el ejercicio anterior para que devuelva un JSON
{
“usuario”: “uss1”,
“password”: “contrasenia123”
} */

//ésta línea va a permitir a EXPRESS leer el JSON, interpretarlo y mostrarlo
// app.use(express.json());

app.get('/api/usuarios', (req,res) =>{
    const user = {
        usuario: "uss1",
        password: "contrasenia123"
    }
    res.send(user);
    console.log(user);
});

/*EJERCICIO 4.
Agregar el parámetro nombreusuario al final de la ruta
/api/usuarios/
Para hacerla dinámica. */

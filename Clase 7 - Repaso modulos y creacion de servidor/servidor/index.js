/* EJERCICIO 3: Modulo http – creando un servidor en node.js.
1. Requiere el módulo http de node.js y crea un servidor
mediante el método createServer, definie una función callback
que nos provea de dos objetos, uno llamado request (petición)
y otro response (respuesta).
2. identifica las diferentes URL que el cliente necesita (“/” y
“/contacto”) obtenlas a través de la propiedad js url del objeto
request y respóndele con un contenido diferente en cada caso.
Usando un condicional if. */

const http = require('http');
const { url } = require('inspector');
//------------------------------------------------------
// SE HACE SIN EXPRESS!
// const express = require('express');
// const app = express();

// app.get('/', (req,res) => {
//     res.send("Bienvenido al MAIN de la web")
// })

// app.get('/contacto', (req, res)=>{
//     res.send("Contactate con nosotros")
// });
// app.listen(8080, ()=> console.log("Escuchando servidor 8080"));
//---------------------------------------------------------------------


//RESOLUCION 3)
// const servidor = http.createServer( (req,res) =>{
//     res.writeHead(200, {'content-type': 'text/plain'});
//     // res.write('Tu vieja FC');
//     const direccion = {
//         url: req.url
//     }
    
//     if(direccion.url === '/'){
//         res.write(JSON.stringify("Estás en el main"));
//     }else if(direccion.url === '/contacto'){
//         res.write(JSON.stringify("Viniste a contactos. CONTACTANOS!"));
//     }
    
    
//     res.end();
// })
// servidor.listen(8080, ()=> console.log("Servidor escuchando puerto 8080"));


/* EJERCICIO 4: Simulando una API.
1. Crea un servidor mediante el método createServer, define una
función callback que nos provea de dos objetos, uno
llamado request (petición) y otro response (respuesta).

2

2. identifica la diferentes URL que el cliente necesita ”/api-del-
tiempo/datos”) obtenla a través de la propiedad js url del

objeto request y respóndele con un objeto. Recuerda hacerle
strinfigy al objeto para que llegue un json.
Listo, has simulado una API 😊 
*/
const servidor = http.createServer( (req, res) => {
    res.writeHead(200, {'content-type': 'text/plain'});
    const direccion = {
        url: req.url,
    }

    if (direccion.url === '/api-del-tiempo/datos') {
        const apiTiempo = {
            localizacion: 'Buenos Aires',
            temperatura: '22 °C',
            st: '25.7 °C',
            viento: '12 km/h',
            humedad: "92%"
        }
        res.write(JSON.stringify(apiTiempo));
    }else if(direccion.url === '/'){
        res.write("Estás en el main. Proba ingresar a 'localhost:8080/api-del-tiempo/datos'");
    }
    res.end()
});
servidor.listen(8080);


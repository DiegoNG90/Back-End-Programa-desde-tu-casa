const http = require('http');

http.createServer((req,res) => {
    // res.write("Hola Mundo");
    res.writeHead(200, {
        'content-type': 'application/json'
    })

    salida = {
        nombre: "Diego",
        edad: 30,
        url: req.url
    }


    res.write(JSON.stringify(salida));
    res.write("\nTu vieja tambien")
    res.end();
})
.listen(8080);

console.log("El servidor está corriendo");
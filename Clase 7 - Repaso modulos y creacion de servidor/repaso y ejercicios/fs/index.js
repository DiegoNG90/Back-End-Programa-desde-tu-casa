/*EJERCICIO 2: Modulo fs.

1. Requiere el módulo fs de node.js y crea un archivo mi-
archivo.txt y asígnale un texto corto, una vez creado léelo y

muestra la información que contenga el archivo, en la consola. */
const fs = require('fs');

// fs.writeFile('./mi-archivo.txt', "Mi archivito; acá podría haber una variable con otros datos tambien =D", (err) => {
//     if(err){
//         throw err;
//     }
//     console.log("Archivo creado exitosamente");
// })

// fs.readFile('./mi-archivo.txt', (err, data) => {
//     if (err) {
//         throw err;
//     }
//     console.log(data.toString());
// })

const argv = process.argv;
console.log(argv);
argv.forEach((val, index) => {
    console.log(`${index}: ${val}`)
})

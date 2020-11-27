console.log("Bienvenidos a Node");
const {crearArchivo, mostrarNumeros} = require('./externo.js');
const fs = require('fs');

//crear archivo

// const contenido = mostrarNumeros();
// fs.writeFile("NuevoDocumento.txt", contenido, 
//     (error) => {
//     if(error){ 
//         throw error;
//     }else{
//         console.log("Un archivo ha sido creado");
//     }
// });

//Eliminar archivo

// fs.unlink("NuevoDocumento.txt", (error) => {
//     if(error){
//         throw error;
//     }else {
//         console.log("El archivo se eliminó correctamente");
//     }
// })

//Chequear existencia del archivo

// fs.stat("Nuevo.txt", (error) => {
//     if(error){
//         throw error;
//     }else {
//         console.log("El archivo se encontró");
//     }
// });

//Ahora, chequear y si no existe, eliminar:

// fs.stat("Nuevo.txt", (error) => {
//     if(error){
//         throw error;
//     }else {
//         fs.unlink("Nuevo.txt", (error) => {
//             if(error){
//                 throw error;
//             }else {
//                 console.log("El archivo se eliminó correctamente");
//             }
//         })
//     }
// });

//Y ahora, en vez de tirarme error, que me lo cree:

// fs.stat("Nuevo.txt", (error) => {
//     if(error){    
//         const contenido = mostrarNumeros();
//         fs.writeFile("Nuevo.txt", contenido, 
//             (error) => {
//             if(error){ 
//                 throw error;
//             }else{
//                 console.log("Un archivo ha sido creado");
//             }
//         });
//     }else {
//         fs.unlink("Nuevo.txt", (error) => {
//             if(error){
//                 throw error;
//             }else {
//                 console.log("El archivo se eliminó correctamente");
//             }
//         })
//     }
// });

//Hacer una funcion existeArchivo(nombre){}

// function existeArchivo(nombreDelArchivo){
//     fs.stat(nombreDelArchivo, (error) => {
//         if(error){    
//             crearArchivo("Tuvieja.txt");
//         }else {
//             fs.unlink(nombreDelArchivo, (error) => {
//                 if(error){
//                     throw error;
//                 }else {
//                     console.log("El archivo se eliminó correctamente");
//                 }
//             })
//         }
//     });
// }

// existeArchivo("Tuvieja.txt");


//CLASE 3

let nombreDelArchivo = process.argv[2].split("=")[1];
let desde = process.argv[3].split("=")[1];
let hasta = process.argv[4].split("=")[1];
console.log("desde: " + desde + " hasta: " + hasta);

fs.stat(nombreDelArchivo, (error) => {
    if(error){    
        const contenido = mostrarNumeros(desde, hasta);
        fs.writeFile(nombreDelArchivo, contenido, 
            (error) => {
            if(error){ 
                throw error;
            }else{
                console.log("Un archivo ha sido creado");
            }
        });
    }else {
        fs.unlink(nombreDelArchivo, (error) => {
            if(error){
                throw error;
            }else {
                console.log("El archivo se eliminó correctamente");
            }
        })
    }
});

const argv = require('yargs')
        .command('listado' , 'Este es un ejemplo de listado', {
          nombre: {
              demand: true,
              alias: 'n'
          },
          desde: {
              alias: 'd',
              default: 0
          },
          hasta: {
              alias: 'h',
              default: 10
          }
        })
        .argv;


const {fs, mostrarNumeros, eliminarArchivo, añadirArchivo, existeArchivo} = require('./externo');

// fs.stat("Numeros.txt", 
//     (error) => {
//         if(error) {
//             const contenido = mostrarNumeros();
//             fs.writeFile("Numeros.txt",contenido,
//                 (error) => {
//                     if(error) throw error;
//                     console.log("El archivo se genero exitosamente");
//                 }
//             )
//         }
//         fs.unlink("Numeros.txt",
//             (error) => {
//                 if(error) throw error;
//                 console.log("El archivo se eliminó exitosamente");
//             }
//         )
//     }
// )


// AHORA Correjido

// fs.stat("Numeros.txt", (error) => {
//     if(error){    
//         const contenido = mostrarNumeros();
//         fs.writeFile("Numeros.txt", contenido, 
//             (error) => {
//             if(error){ 
//                 throw error;
//             }else{
//                 console.log("Un archivo ha sido creado");
//             }
//         });
//     }else {
//         fs.unlink("Numeros.txt", (error) => {
//             if(error){
//                 throw error;
//             }else {
//                 console.log("El archivo se eliminó correctamente");
//             }
//         })
//     }
// });


/*TAREA: Modularizar el archivo, cosa que quede una estructura así:
 if(!Existe) crearArchivo()
 else borrarArchivo()
*/
// if (existeArchivo("Nombre.txt") === false) {
//     añadirArchivo("Nombre.txt", mostrarNumeros());
// }else{
//     eliminarArchivo("Nombre.txt");
// }


// añadirArchivo("Nombre.txt", mostrarNumeros());
// console.log(existeArchivo("Nombre.txt"));

fs.stat("Nombre.txt", (error) => {
    if (error) {
        añadirArchivo("Nombre.txt", mostrarNumeros());
    }
    else{
        eliminarArchivo("Nombre.txt");
    }
}) 













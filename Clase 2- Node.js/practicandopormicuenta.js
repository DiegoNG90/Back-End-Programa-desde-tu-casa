// // const process = require('process');
// //Ya viene viene integrado, por eso se comenta

// const args = process.argv;

// console.log('number of arguments are: ' + args.length);

// args.forEach((val, index) => { 
//     console.log(`Index: ${index}: Value: ${val}`); 
// });

//---------------------------------------------------------
// Ahora veamos un poco de FileSystem
const fs = require('fs');

// const contenido = "Hola!"

function crearArchivo(ruta,contenido){
    fs.writeFile(ruta, contenido, (error)=>{
        if (error) {
            throw error;
        }else{
            console.log("Se creo el archivo 'NuevoText.txt' en la carpeta practica. Chequealo");
        }
    })
}

function eliminarArchivo(ruta){
    fs.unlink("./practica/NuevoTexto.txt", (error)=>{
        if (error) {
            throw error;
        }else{
            console.log("El archivo 'NuevoText.txt' se ha eliminado correctamente de la carpeta practica.");
        }
    });
}

function existenciaArchivo(ruta){
    fs.stat("./practica/NuevoTexto.txt", (error)=>{
        if (error) {
            throw error;
        }else{
            console.log("El archivo EXISTE");
        }
    });
}

// crearArchivo("./practica/NuevoTexto.txt", "Hola! soy el contenido");
// eliminarArchivo("./practica/NuevoTexto.txt");
console.log(fs.Dir);
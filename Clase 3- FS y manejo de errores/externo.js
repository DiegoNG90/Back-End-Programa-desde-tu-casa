const fs = require('fs');


//EJERCICIO EN VIVO EN CLASE 3 (23): Crear flags --desde=0 y --hasta=10 de manera tal que estas flags modifiquien el for de la funcion mostrarNumeros().

function mostrarNumeros(desde, hasta){
    let retorno = "";
    for(desde ; desde < hasta; desde++){
        retorno = retorno + "Numero : " + desde + "\n";
    }
    return retorno;
}

//Ésta funcion no anda; retorna undefined. Por qué? TIene que ver con el funcionamiento del callback quizás?
function existeArchivo(archivo){
    fs.stat(archivo, (error) => {
        if (error) {
            console.log(`El archivo ${archivo} no existe`);
            return false;
        }
        else{
            console.log(`El archivo ${archivo} existe`);
            return true;
        }
    }) 
}

function eliminarArchivo(archivo){
    fs.unlink(archivo, (error) => {
        if(error){
            throw error;
        }else {
            console.log(`El archivo ${archivo} se eliminó correctamente`);
        }
    })
}

function añadirArchivo(archivo, contenido){
    fs.writeFile(archivo, contenido, 
        (error) => {
        if(error){ 
            throw error;
        }else{
            console.log(`El archivo ${archivo} ha sido creado`);
        }
    })
}


module.exports = {fs, mostrarNumeros,eliminarArchivo,añadirArchivo};



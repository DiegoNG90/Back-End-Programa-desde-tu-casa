const fs = require('fs');

function mostrarNumeros(){
    let retorno = "";
    for(let i=0 ; i < 10; i++){
        retorno = retorno + "Numero : "+ i+ "\n";
    }
    return retorno;
}


//Ésta funcion no anda; retorna undefined. Pregunté en clase, pero no supieron aclararme por qué :
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

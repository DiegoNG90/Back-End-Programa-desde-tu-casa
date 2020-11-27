const fs = require('fs');

function mostrarNumeros(desde=0, hasta=10){
    let reglon = "";
    for (let i = desde; i < hasta; i++) {
        reglon = reglon + "Numero: " + i + "\n";
    }
    return reglon;
};

function crearArchivo(nombreArchivo){
    const contenido = mostrarNumeros();
    fs.writeFile(nombreArchivo, contenido, 
        (error) => {
        if(error){ 
            throw error;
        }else{
            console.log("Un archivo ha sido creado");
        }
    });
}

module.exports = {crearArchivo, mostrarNumeros};

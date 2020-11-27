const fs = require('fs');
//La agenda vacia trabajará con el archivo /db/data.json
let agenda = [];

const escribirJson = () =>{
    let data = JSON.stringify(agenda);

    fs.writeFile('db/data.json', data, 
    (error)=> {
    if (error){
            throw new Error("No se pudo escribir el archivo", error)
        }        
    })
}

const obtenerDatosDelJSON = () => {
    agenda = require('../db/data.json');
    return agenda;
}

const agregarUsuario = (dni, nombre, trabaja) =>{
    obtenerDatosDelJSON();
    let registro = {
        dni: dni,
        nombre: nombre,
        trabaja: trabaja
    }    
    agenda.push(registro);

    escribirJson()
}

const listarUsuarios = () => {
    return obtenerDatosDelJSON();
}

const modificarUsuario = (dni, trabaja) => {
    obtenerDatosDelJSON();
    //Por cada uno de los objetos de la agenda, chequear si el item DNI de la agenda concuerda con el N° de dni que paso por parámetro y guardarlo en una variable index.
    const index = agenda.findIndex(item => item.dni === dni)
    //findIndex puede devolver -1 si NO encuentra y SI lo encuentra, devuelve el index(posicion).
    if (index > -1) {
        agenda[index].trabaja = trabaja;
        escribirJson();
    }else {
        throw new Error("No encontró el DNI que busca");
    }

}

module.exports = {agregarUsuario, listarUsuarios, modificarUsuario};
/*EJERCICIO 1: Modulo path.
1. Requiere el módulo path de node.js y parsea el path de la
variable global __dirname. Muéstralo por consola y por último
accede a la propiedad name.*/

const path = require('path');

const dirParseado = path.parse(__dirname.toString());

console.log(dirParseado.name);
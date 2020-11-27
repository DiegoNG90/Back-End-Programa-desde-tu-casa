/*Indicar por flags un día con un número del 1 al 7:
Luego hacer un switch en donde:
1 le corresponderá a “Lunes”, 
2 a “Martes”
… 
7 a ”Domingo”.
Por cada uno mostrar un console.log con la leyenda “Hoy es “ y el día.
 */

const argv = require('./utils/yargs').argv;
const dia = argv.dia;

/*EJERCICIO 2.
Al llamado anterior agregale un flag que obtenga la temperatura del día.
*/


const {peticionClima} = require('./src/funciones');

console.log("el contenido de peticionClima es ", peticionClima());



console.log("el contenido de la variable dia: ", dia);
console.log(`el contenido de argv: `, argv);


switch (dia) {
    case 1:
        console.log("El día ingresado es Lunes");
        console.log(`La temperatura es de ${peticionClima()}`);
        break;
    case 2:
    console.log("El día ingresado es Martes");
        break;
    case 3:
        console.log("El día ingresado es Miercoles");
        break;
    case 4:
        console.log("El día ingresado es Jueves");
        break;
    case 5:
        console.log("El día ingresado es Viernes");
        break;
    case 6:
        console.log("El día ingresado es Sabado");
        break;
    case 7:
        console.log("El día ingresado es Domingo");
        break;
    default:
        console.log("El numero de día ingresado no existe. Intente con una opcion del 1 al 7");
        break;
}

 
//Vamos a ver process y argv (argumentos). Fundamentalmente, se trata de comandos de la línea de comando/terminal. De ésta manera, empezaremos a trabajar con flags, es decir, etiquestas que pasamos desde la línea de comando con -- como indicador. i.e.: --nombre="Nombre.txt".

const fs = require('fs');
//process es un comando que devuelve un MONTON de comandos. Nos interesa trabajar con argv.
// const argv = process.argv;

//Para ésto, parseamos previamente un 3er argumento [2] desde la terminal, poniendo un flag al comando,i.e.;
//node app --nombreArchivo="tuvieja.txt"
// const nombreArchivo = ( process.argv[2].split("=")[1] ); 

//tuvieja.txt
// console.log(nombreArchivo);

//Ahora, trayendo el código de la clase 2 - Practoca ("externo.js"), vamos a volver a lo que veníamos trabajando de fileSystem para ver el aspecto dinámico de trabajar con los argv, las flags y el fs.

const {mostrarNumeros,eliminarArchivo,añadirArchivo} = require('./externo.js');

/*
fs.stat(nombreArchivo, (error) => {
    if (error) {
        añadirArchivo(nombreArchivo, mostrarNumeros());
    }
    else{
        eliminarArchivo(nombreArchivo);
    }
}) 
*/

//Aprovechando la variable nombreArchivo, volvimos más dinámico el ejercicio de la clase anterior.

//EJERCICIO EN VIVO EN CLASE 3 (23): Crear flags --desde=0 y --hasta=10 de manera tal que estas flags modifiquien el for de la funcion mostrarNumeros().
// const desde = parseInt( process.argv[3].split("=")[1] );
// const hasta = parseInt( process.argv[4].split("=")[1] );

// fs.stat(nombreArchivo, (error) => {
//     if (error) {
//         añadirArchivo(nombreArchivo, mostrarNumeros(desde, hasta));
//     }
//     else{
//         eliminarArchivo(nombreArchivo);
//     }
// }) 


//La debilidad de process.argvs[p] es que, conforme le pasamos más flags al comando node, más chances tenemos que confundirnos el orden en que le pasamos los parámetros (en relacion a la posicion del argvs[p]). Por ende, empezaremoz a trabajar con una librería de Node llamda YARGS:


// ------------------------------------------------------------------------------
//YARGS
// const argv = require('yargs').argv;

//Ver la diferencia entre uno y otro
console.log("process: ", process.argv);
//1) Process devuelve array.
//2) Las primeras dos posiciones, para nuestro caso, no nos interesan (son urls)
// console.log("yargs: ", argv);
//1) YARGS devuelve un objeto
//2) La principal ventaja de YARGS: como guarda la informacion como un objeto, no requiere pasar los flags en orden (como si lo requiere el Process dado que guarda los datos en una array -y las arrays SÍ proceden por orden/index-).

//Algunas pruebas para ir familiarizandonos como funciona yargs, como llamar a sus propiedades (donde se guardan las flags)
// console.log("yargs.desde : ", argv.desde);
// console.log("yargs.hasta : ", argv.hasta);
// console.log("yargs.nombre : ", argv.nombre);

/*
Si pasamos el comando, por ejemplo:

JS:
console.log("yargs: ", argv);

NODE:
node app --nombre="tuvieja.txt" --hasta=35 --desde=5

OUTPUT NODE:
yargs:  { _: [], nombre: 'tuvieja.txt', hasta: 35, desde: 5, '$0': 'app' }


El primer key del objeto argvs (yargs) es _:[]. Se trata de una array vacía.

Para añadir un valor allí, alcanza con el siguiente comando:
node app ProbamosMeterDatoEnLaArray --nombre="tuvieja.txt" --hasta=35 --desde=5

Ahora, _: [ 'ProbamosMeterDatoEnLaArray' ],

EJEMPLO COMPLETO:
JS:
console.log("yargs: ", argv);

NODE:
node app ProbamosMeterDatoEnLaArray --nombre="tuvieja.txt" --hasta=35 --desde=5

OUTPUT NODE:
yargs:  {
  _: [ 'ProbamosMeterDatoEnLaArray' ],
  nombre: 'tuvieja.txt',
  hasta: 35,
  desde: 5,
  '$0': 'app'
}
*/

//Visto el valor de la key _:, vamos a meternos con la funcion .command de yargs:

const argv = require('yargs')
    //1)El primer parámetro de .command debe SI O SI COINCIDIR con el valor pasado en la key _:
    //2) El segundo es una descripcion/ayuda
    //3) El tercero es un objeto que debe tener las flags como propiedades/keys(deben COINCIDIR). El valor será otro objeto cuyas keys ya son más variadas y complejos: demand(obliga), default(por defecto si no aclara), alias(para shorcut):
    .command('ProbamosMeterDatoEnLaArray', "Esta es la ayuda/descripcion de éste objeto", {
        nombre: {
            demand: true,
            alias: 'n',
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

    console.log("yargs: ", argv);
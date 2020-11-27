const { agregarUsuario, listarUsuarios, modificarUsuario } = require('./src/archivos')
const argv = require('./utils/yargs').argv;

const opcion = (argv._[0]);

//Éstas variables estarán guardando los datos que pasemos por flag y luego las llevaremos como parámetros a las distintas funciones (i.e.: agregarUsuario(dni, nombre, trabaja))
const dni = argv.dni
const nombre = argv.nombre
const trabaja = argv.trabaja

switch(opcion){
    case 'agregarusuario':
        agregarUsuario(dni, nombre, trabaja);
        break;
    case 'listarusuarios':
        const listado = listarUsuarios();
        listado.map(element => {
            console.log(`dni: ${element.dni} - nombre: ${element.nombre} - trabaja: ${element.trabaja}`);
        })
        break;
    case 'modificarusuario':
        modificarUsuario(dni, trabaja);
        break;
    case 'borrarusuarios':
        console.log("borrarusuarios");
        break;
    default:
        console.log("Te equivocaste de item");
}

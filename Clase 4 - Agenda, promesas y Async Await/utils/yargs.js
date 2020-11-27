const argv = require('yargs')
            .command('agregarusuario', "Esta funcion agrega un usuario", 
            {
                dni: {
                    demand: true,
                    alias: 'd'
                },
                nombre: {
                    alias: 'n'
                },
                trabaja: {
                    alias: 't',
                    default: true
                }
            })
            .command('listarusuarios', "Listamos todos los usuarios", 
                { }
            )
            .command('modificarusuario', "modifica el estado labora de un usuario pre-existente/cargado", 
            {
                dni: {
                    demand: true,
                    alias: 'd'
                },
                trabaja: {
                    demand: true,
                    alias: 't'            
                }
            })     
            .argv


module.exports = {argv}
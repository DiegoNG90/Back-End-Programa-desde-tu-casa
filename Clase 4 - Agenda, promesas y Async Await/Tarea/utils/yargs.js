const argv = require('yargs')
.command("diaingresado", "Esta funcion muestra por consola el día ingresado numericamente", 
{
    dia: {
        demand: true,
        alias: 'd'
    },
    temperatura: {
        alias: 't',
        default: true
    }
})
.argv;

module.exports = {argv}
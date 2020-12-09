//Cómo crear un prompt desde Node, dado que nativamente, Node no acepta el método prompt().
// const readline = require('readline').createInterface({
//     input: process.stdin,
//     output: process.stdout
// })
  
// readline.question(`What's your name?`, name => {
//     console.log(`Hi ${name}!`)
//     readline.close()
// })

/*Veamos una manera de hacer lo mismo */
// const inquirer = require('inquirer')

// let question = [
//     {
//         type: 'input',
//         name: 'name',
//         message: "What's your last name?"
//     }
// ];

// inquirer.prompt(question)
// .then(answer => {
//     console.log(`Hi, ${answer['name']}!`);
// })

/* Ahora sí: Si queremos ocultar el contenido que el usuario da como respuesta, vamos a ver como, con el uso del objeto readlineSync y su propiedad hideEchoBack*/

var readlineSync = require('readline-sync');
 
// Wait for user's response.
var userName = readlineSync.question('May I have your name? ');
console.log('Hi ' + userName + '!');
 
// Handle the secret text (e.g. password).
var favFood = readlineSync.question('What is your favorite food? ', {
  hideEchoBack: true // The typed text on screen is hidden by `*` (default).
});
console.log('Oh, ' + userName + ' loves ' + favFood + '!');
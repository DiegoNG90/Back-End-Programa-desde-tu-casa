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
const inquirer = require('inquirer')

let question = [
    {
        type: 'input',
        name: 'name',
        message: "What's your last name?"
    }
];

inquirer.prompt(question)
.then(answer => {
    console.log(`Hi, ${answer['name']}!`);
})
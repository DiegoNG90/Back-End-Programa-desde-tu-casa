const inquirer = require('inquirer')

var questions = [
  {
    //el tipo input == prompt
    type: 'input',
    //Lo que va a quedar guardado en la variable;
    name: 'name',
    //El contenido de la string del prompt('');
    message: "What's your name?"
  },
  {
      type: 'confirm',
      name: 'yes/no',
      message: 'Are you 18 or older?'
  }
]
//
inquirer.prompt(questions).then(answers => {
  console.log(`Hi ${answers['name']}!`);
  //Acá tengo un problema; cómo hago para hacer referencia al valor booleano de la 2da pregutan (el confirm)?
  (answers['name'])? console.log(`${answers['name']}, you are welcome in the club`) : console.log("You are a child, go home!");;
});

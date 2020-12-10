const inquirer = require('inquirer');
// const question  = require('readline-sync');

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
      message: 'Are you 18 or older?: Yes/No'
  }
]
//Programa para acceso a un bar
inquirer.prompt(questions).then(answers => {
  console.log(`Hi ${answers['name']}!`);
  
  // imprimiendo answers, obtengo un objeto. Con ésta línea descifré la siguiente.
  // console.log(answers);

  //Operador ternario: si es mayor, bienvenido, sino, a tu casa
  (answers['yes/no'])? console.log(`${answers['name']}, you are welcome in the club`) : console.log("You are a child, go home!");;
});

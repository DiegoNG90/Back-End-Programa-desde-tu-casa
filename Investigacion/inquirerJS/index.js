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
  },
  {
    type: 'confirm',
    name: 'band',
    message: 'Are you going to see the band?'
  }
]
//Programa para acceso a un bar
inquirer.prompt(questions).then(answers => {
  console.log(`Hi ${answers['name']}!`);
  
  // imprimiendo answers, obtengo un objeto. Con ésta línea descifré la siguiente.
  
  //Operador ternario: si es mayor, bienvenido, sino, a tu casa
  if (answers['yes/no']) {
      console.log(`${answers['name']}, you are welcome in the club`);
      if (answers.band === true) {
        console.log(`${answers.name}, you have to pay $20 to see the band`);
      }else{
        console.log("Go foward, then left and you'll get to the bar");
      }
      
  } else{
  console.log("You are a child, go home!");
  }

  // (answers['yes/no'])? console.log(`${answers['name']}, you are welcome in the club`) : console.log("You are a child, go home!");

  // //operador ternario: si viene a la banda: paga $20 extra. Sino, "al fondo a la izquierda"
  // (answers.band === true)? console.log(`${answer.name}, you have to pay $20 to see the band`) : console.log("Go foward, then left and you'll get to the bar");
  // console.log(answers);
});

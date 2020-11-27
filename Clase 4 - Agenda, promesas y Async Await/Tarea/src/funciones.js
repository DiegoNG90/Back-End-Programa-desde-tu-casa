const axios = require('axios');
let api;


//Quizás hacerlo con promesas? No sé...
const peticionClima = () => {
    axios.get('https://api.openweathermap.org/data/2.5/weather?q=Buenos%20Aires&units=metric&appid=5b21a90adc533c87f4debbcc0fe00773')
    .then(response => 
    {
        api = response.data.main.temp;
        // console.log(api);
        // console.log("El tipo de dato que regresa la temperatura es: ", typeof(api));
        return api;
    })
    // .then(function(response){
    //     peticionData(response);
    // })
    .catch(err => {
        console.error(err);
    });
}

// async function kelvinACelcius (tempEnK){
//     let celcius = await tempEnK - 273.15;
//     console.log(`la temperatura en celcius es ${Math.round(celcius)} °C`);
//     return ` ${Math.round(celcius)} °C `;
// }

// function peticionData(data){
//     return data;
// }

// //Esto me está devolviendo undefined
// const temperatura = peticionClima();
// console.log(`La temperatura que se guardó es ${temperatura}`);


// //Ésto también me está devolviendo undefined
// async function cargarAPI () {
//     api = await peticionClima();
//     console.log(`Probando ASYNC AWAIT vamos a ver si podemos imprimir la temperatura: `, api);
// }
// cargarAPI();


module.exports = {peticionClima}
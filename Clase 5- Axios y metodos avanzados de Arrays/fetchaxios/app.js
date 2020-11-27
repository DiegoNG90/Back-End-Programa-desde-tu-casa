const axios = require('axios');


//Llamar una api con AXIOS:
axios.get('https://jsonplaceholder.typicode.com/todos/91')// el 91 es un ID posible.
    .then(response => {const respuesta= response.data//Acá vemos que nos devuelve un objeto, cuya una de sus keys es data
    console.log(respuesta.title);})
    .catch(error => console.log(error)
);
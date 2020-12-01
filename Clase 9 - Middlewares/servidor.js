const express = require('express');
const app = express();

const estaLogueado = () => true;

const verificarLogin = (req, res, next) => {
    if (estaLogueado()) {
        console.log("Login exitoso");
        next();
    }else{
        console.log("Login FALLÓ!");
    }
};

app.use(verificarLogin);

app.get('/', (req,res) =>{
    res.send("Pagina web MAIN");
})




app.listen(8080, ()=> {
    console.log("Escuchando servidor en puerto 8080");
});

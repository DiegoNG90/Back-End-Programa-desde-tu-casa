const express = require('express');
const app = express();

const estaLogueado = () => true;
const pagoCuota = () => true;

const verificarLogin = (req, res, next) => {
    if (estaLogueado()) {
        console.log("Login exitoso");
        next();
    }else{
        console.log("Login FALLÓ!");
    }
};

const verificarPago = (req,res,next) => {
    if(pagoCuota()){
        console.log("Realizó el pago");
        next();
    }else {
        console.log("Alerta: NO PAGO!");
    }
}

app.use(verificarLogin, verificarPago);

app.get('/', (req,res) =>{
    res.send("Pagina web MAIN");
})




app.listen(8080, ()=> {
    console.log("Escuchando servidor en puerto 8080");
});

const express = require('express');
const session = require('express-session');
const app = express();
const port = 8080


app.use(session({
    secret: "este es mi pequeño secreto",
    resave: true,
    saveUninitialized: true 
}))

app.get("/", (req,res) => {
    console.log(req.session);
    if (req.session.count) {
        req.session.count++;
    }else{
        req.session.count = 1;
    }
    res.send("Cantidad de veces ingreadas al sitio: " + req.session.count)
})

app.listen(port, ()=> {
    console.log("Escuchando servidor en 8080");
})
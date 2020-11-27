const express = require('express');
const app = express();
const hbs = require('hbs')

app.use(express.static(__dirname+'/public/'));

app.set('view engine', 'hbs'); // jade  // moustache 
hbs.registerPartials(__dirname +'/views/partials');

app.get('/', (req, res)=>{
    res.render('home',{
        anio : new Date().getFullYear(),
        titulo : "Titulo custom "
    });
});

app.get('/nosotros', (req, res)=>{
    res.render('nosotros',{
        anio : new Date().getFullYear(),
        titulo : "Titulo custom "
    });
});
app.listen(9000, () => {
    console.log("Escuchando desde el puerto 9000");
});


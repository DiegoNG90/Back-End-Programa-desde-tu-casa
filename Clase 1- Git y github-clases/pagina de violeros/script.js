console.log("Ahora linkie script.js y deslinkie guitarristas.js");


import guitarristas from './guitarristas.js';

//Objeto guitarristas
// console.log(guitarristas.jimmyHendrix);

// console.log(guitarristas.jimmyHendrix.nombre);


//Input Guitarristas

const $nodoSelectGuitarristas = $('#inputGuitarristas')[0];

//Al cambiar la opcion del select (de -- a cualquier guitarrista), muestra el siguiente select(el de Datos)
$nodoSelectGuitarristas.onchange = function(){
    const eleccionGuitarrista = document.querySelector("#inputGuitarristas").value;
    
    if(eleccionGuitarrista !== "--"){
        document.querySelector('#eleccionDeDatos').className = "";
    }
    return eleccionGuitarrista;
}

const $nodoSelectDatos = $('#inputKeys')[0];
$nodoSelectDatos.onchange = function(eleccionGuitarrista){
    const eleccionDato = document.querySelector("#inputKeys").value;
    
    // if(eleccionDato !== "--"){
    //     if (eleccionDato ===) {
            
    //     }
    //     document.querySelector('#jimmyHendrix').className = "";
    // }

}

// function mostrarSiguienteSelect (nodo, idInput)
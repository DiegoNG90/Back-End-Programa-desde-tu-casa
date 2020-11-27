//https://medium.com/laboratoria-how-to/programacion-asincrona-cea3bad7c3c6#:~:text=S%C3%ADncrono%20vs%20As%C3%ADncrono&text=Un%20c%C3%B3digo%20s%C3%ADncrono%20es%20aquel,y%20contin%C3%BAa%20con%20su%20ejecuci%C3%B3n.
console.log("Primero");
setTimeout( () => {
    console.log("Segundo");
}, 1000);
console.log("tercero");

//
console.log("script linkeado a index.html");

//listadoAlumnos.html
const body = document.querySelector("body");

body.onload = peticionAlumnos();
function peticionAlumnos() {
    axios.get("http://localhost:8080/gestoralumnos/")
    .then((response)=>{
        mostrarAlumnos(response.data);
    })   
}

function mostrarAlumnos(data){
    const listadoAlumnos = document.querySelector("#listado-alumnos");

    data.forEach((element) => {
        listadoAlumnos.innerHTML += `<li>  <span>${element.id} </span> || <span> ${element.nombre} </span> ||<span> ${element.apellido}</span> || <span>${element.email}</span> || <span>${element.telefono}</span> || ${element.curso} || <button onclick="eliminarAlumno(event)"> Eliminar </button> || <button onclick="modificarAlumno()"> Modificar </button>`
        // console.log(element);
    });
}

function eliminarAlumno(event) {
    event.preventDefault();
    const nodoId = parseInt((event.path[1].childNodes[1].innerHTML).trim())
    // console.log(nodoID);
    // const id = document.querySelector("#id")
    axios.delete(`http://localhost:8080/gestoralumnos/alumnos/${nodoId}`)
    .then(()=>{
        alert("Producto eliminado")
        location.reload();
    })
}

function modificarAlumno(){
    
}


// index.html
const formularioAlumnos = document.querySelector("#formulario-alumnos");
// console.log(formularioAlumnos);
function enviarDatos(e){
    e.preventDefault();
    //Recolecto todos los valores del form y lo guardo en un objeto data que quiero mandar al back
    const data = {
        "id": document.querySelector("#id").value,
        "nombre": document.querySelector("#nombre").value,
        "apellido": document.querySelector("#apellido").value,
        "email": document.querySelector("#email").value,
        "telefono": document.querySelector("#telefono").value,
        "curso": document.querySelector("#curso").value
    }

    // Ahora mando por AXIOS la data/JSON al back
    axios.post("http://localhost:8080/gestoralumnos/alumnos", data)
    console.log("Datos enviados al back");
    alert("Datos enviados");
    window.location = "listadoAlumnos.html";
}
formularioAlumnos.addEventListener('submit', enviarDatos)
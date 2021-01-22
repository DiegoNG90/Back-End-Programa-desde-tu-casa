console.log("script linkeado a index.html");

const formularioAlumnos = document.querySelector("#formulario-alumnos");
// console.log(formularioAlumnos);
function enviarDatos(){
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
}
formularioAlumnos.addEventListener('submit', enviarDatos)
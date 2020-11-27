//Metodos arrays

let numeros = [1,2,3,4,7,15,12,22,57];
let frutas = ['banana', 'manzana', 'naranja', 'pera', 'sandia'];
//length: da el largo de una array.
const longitud = numeros.length;
console.log(`La longitud de la array numeros es : ${longitud}`);
//sort: ordena alfabeticamente una array

const frutasOrdenadas = frutas.sort();
console.log(frutasOrdenadas);
let numerosOrdenados = numeros.sort();
console.log(numerosOrdenados);
//Con los números se genera un problema. SOLUCION: hay que usar una funcion anónima:
numerosOrdenados = numeros.sort((numero1,numero2) => {
    return numero1-numero2
});
console.log(numerosOrdenados);

//push: agrega al final de la array un elemento.

frutas.push("Mandarina");
//unshift: agrega un elemento al principio de la array.
frutas.unshift("kiwi");

console.log('probando push y unshift', frutas);
//shift: elimina el 1er elemento de la array.
frutas.shift();
//pop: agrega el último elemento de la array.
frutas.pop();
console.log('Probando shift y pop', frutas);


//Slice: hace un recorte. Genera un array nuevo, por eso es necesario guardarlo en otro array:
const frutasRecortadas = frutas.splice(0,1);
console.log('el slice requiere guardarlo en una nueva variable: frutasRecortadas: ', frutasRecortadas);

//Splice: MULTIMETODO: Se usa para quitar o agregar elementos. Tiene varios parámetros.
//Para eliminar:
console.log(frutas);
frutas.splice(0,1);
console.log('ahora se fue manzana', frutas);
//Para modificar/reemplazar:
console.log(frutas);
frutas.splice(0,1, 'MMManzana');
console.log('ahora vuelve manzana ocupa el lugar 0, es decir, el que antiguamente tenia naranja', frutas);

//

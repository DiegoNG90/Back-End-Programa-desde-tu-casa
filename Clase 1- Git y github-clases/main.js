console.log("Linkeado");

class Mueble{
    constructor(material = "madera", patas = 2, peso = 1){
        this.material = material;
        this.patas = patas;
        this.peso = peso;
    }
    mostrarDatos(){
        console.log(`Material: ${this.material}, Patas: ${this.patas}, Peso: ${this.peso}`);
    }
    mostrarPatas(){
        let patas = this.patas;
        (patas === 0)? console.log("No tiene patas") : console.log(`Tiene ${patas} patas`);
    }
    consultaPeso(){
        let peso = this.peso;
        (peso > 15)? console.log("Necesita llevar flete") : console.log("Puede llevarlo por sí mismo");
    }
}

const mesaRatona = new Mueble();
const mesaPrincipal = new Mueble("Cañamo", 4, 8);
console.log(mesaRatona);
console.log(mesaPrincipal.mostrarPatas())

const estante = new Mueble("Acero", 0, 1);

console.log(estante.mostrarPatas());

//3)
class Mesa extends Mueble{
    constructor(material, patas, peso, espacio){
        super(material, patas, peso);
        this.espacio = espacio;
    }
    mostrarEspacio(){
        let espacioElegido = this.espacio.toLowerCase();
        if (espacioElegido !== "patio" && espacioElegido !== "living") {
            console.log("Error: Debes ingresar patio o living");
            delete this.espacio;
        }else{
            console.log("La mesa puede usarse en en PATIO/LIVING");
        }
    }
}

const mesa1 = new Mesa("madera", 4, 5, "cancha");
console.log(mesa1);    

//4)
/*EJERCICIO 4
Crea una subclase que se llame Silla y herede los atributos de Mueble.
Agregale los siguientes atributos:
Respaldo (si o no). 
Altura (en centímetros).
Y agrega los siguientes métodos:
Método 1: Si tiene una pata, no tiene respaldo y mide más de 100 cms la consola
debe devolver “Es un taburete”; caso contrario “No es un taburete”*/

class Silla extends Mueble{
    constructor(material, patas, peso, respaldo=(("Si").toLowerCase()), altura="100cm"){
        super(material, patas, peso);
        this.respaldo = respaldo;
        this.altura = altura;
    }
    esTaburete(){
        let altura = this.altura;
        altura = parseInt(altura.split(altura.slice(altura.length-2, altura.length))[0]);
        (this.patas === 1 && this.respaldo !== "si" && altura>100)? console.log("Es un taburete") :
        console.log("No es un taburete");
    }

}

const silla1 = new Silla("Madera", 4, 2);
console.log(silla1.esTaburete());

const silla2 = new Silla("Plastico", 1, 3, "no", "110cm");
console.log(silla2.esTaburete());
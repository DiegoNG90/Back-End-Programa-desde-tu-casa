console.log("Linkeado al .html");

class Guitarrista{
    constructor(nombre, imagen, fechaDeNacimiento, lugarDeNacimiento, guitarraPrincipal, bandas){
        this.nombre = nombre;
        this.imagen = imagen;
        this.fechaDeNacimiento = fechaDeNacimiento;
        this.lugarDeNacimiento = lugarDeNacimiento;
        this.guitarraPrincipal = guitarraPrincipal;
        this.bandas = bandas;
    }
    mostrarFoto(){

    }
}

const jimmyHendrix = new Guitarrista("Jimmy Hendrix (nacido Johnny Allen Hendrix)", "C:\Users\Javier\Documents\Archivos Javier\Diego\Programacion\Back End Programa desde tu casa\Clase 1- Git y github-clases\pagina de violeros\img\jh.jpg", "27/11/1942", "Seattle, Washington, USA", "White 1968 Fender Stratocaster", ["The isley Brothers", "The Jimmy Hendrix Experience", "Band of Gypsis", "Jimmy James and the Blue Flames"]);


// console.log(jimmyHendrix);

const jimmyPage = new Guitarrista("Jimmy Page (James Patrick Page)","C:\Users\Javier\Documents\Archivos Javier\Diego\Programacion\Back End Programa desde tu casa\Clase 1- Git y github-clases\pagina de violeros\img\jp.jpg", "9/1/1944", "Heston, Middlesex, Inglaterra", "1959 Gibson Les Paul Standard 'Number One'", ["The yardbirds", "Led Zeppelin", "Page and Plant", "The firm", "Coverdale/Page", "The Honeydrippers", "XYZ", "Screaming Lord Sutch and the Savages"]);

// console.log(jimmyPage);

const sydBarrett = new Guitarrista("Syd Barrett (Roger Keith Barrett)", "C:\Users\Javier\Documents\Archivos Javier\Diego\Programacion\Back End Programa desde tu casa\Clase 1- Git y github-clases\pagina de violeros\img\sb.jpg", "6/1/1946", "Cambridge, Inglaterra", "Squire Mirror Disc Telecaster", ["Pink floyd", "Stars"]);

// console.log(sydBarrett);

export default {jimmyHendrix, jimmyPage, sydBarrett};
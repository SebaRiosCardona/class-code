/*
Cuando importamos algo conviene que el nombre de la variable coincida con lo que queremos importar. Aca estamos importando
lo que se exportó el archivo persona.js, no el nombre del archivo en sí, como tenia "module.exports = Persona;" entonces se
va a estar exportando esa clase Persona, y a su vez la almaceno en la variable "Persona" que defini en este archivo
(LE VOY A PONER OTRO NOMBRE EN ESTE ARCHIVO PARA DIFERENCIARLO, AUNQUE NO ES LA MEJOR PRACTICA)
*/

//NO HACE FALTA PONER LA EXTENSION DE LOS ARCHIVOS
const PersonaApp = require("./persona")// Si bien pongo el nombre del archivo, voy a estar importando, en este caso, la clase Persona
const varios = require("./varios")// Aca lo mismo, pongo el nombre del archivo pero importo todo lo que exporte del archivo "varios"
//tambien puedo importar una funcion/clase/
const suma = require("./varios").f1 //solamente me traiga la operacion suma y la guardo en la variable suma
const resta = require("./varios").f2 //solamente me traiga la operacion resta y la guardo en la variable resta

/*Esto es otra forma de importar las operaciones, con el require indico que documento me quiero traer, y en las llaves pongo el nombre
de la operacion que quiero traer, y tengo la posibilidad de renombrarlo poniendo ": + nuevoNombre"*/
const {f1:suma2, usuarios:users} = require("./varios")

//aca voy a crear una instancia de la clase que estoy importando (usando el nombre de a variable que cree aca)
let persona1 = new PersonaApp ("Juan", "Perez"); ////Solo se aplico el contructor "new" cuando quiero ejecutar una clase, en
// este caso la clase "PersonaApp", la cual hace referencia a la clase "Persona" del archivo "persona"

/*LOS METODOS DE LA CLASE QUE IMPORTA NO SE EJECUTAN AUTOMATICAMENTE CUANDO SE CREA UNA INSTANCIA DE LA CLASE, SOLO SE
EJECUTA EL CONSTRUCTOR, TENGO QUE LLAMAR EXPLICITAMENTE EL METODO*/
console.log(persona1.saludo());


console.log(varios.f1(10, 11))
console.log(varios.usuarios)

let heroe1 = new varios.Heroe("batman", "bruce") //Solo se aplico el contructor "new" cuando quiero ejecutar una clase, en este caso la clase Heroe
console.log(heroe1.verIdentidad())

console.log(suma(5, 1));
console.log(resta(5, 1));

console.log(suma2(5, 2))
console.log(users)



//Siguiendo este mismo lineamiento puedo importar la libreria fs, al importar unicamente promesas
const fsConPromesas = require("fs").promises
fsConPromesas.writeFile()//y este "writeFile" es el que tiene que ver con la promesas
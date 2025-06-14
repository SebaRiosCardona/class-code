//Para importar la clase Persona que exporte del archivo persona.js
//DEBEMOS PONER LA EXTENSION DE LOS ARCHIVOS
import Persona from "./persona.js"; //se suele nombrar de la misma forma que la clase o el dato que estamos importando 
//Como leer lo que importo de un archivo del cual exporto muchas cosas
import {usuarios, f1 as suma, f2 as resta, Heroe} from "./varios.js" //Es una especia de desustruracion, y cambio el nombre de las 
                                                                     //operaciones de "f1" y "f2"
import * as varios from "./varios.js";// Importo todo en una sola variable la cual llamo varios, y despues los voy llamando como 
                                      // a cualquier otra variable (varios.f1)
import villano, {f2 as restar}from "./varios.js" // Al hacerlo de esta forma (sin usar el * o sin usar las {}) se importa el dato (en este caso la
                                                // clase Villano) al que se le puso default, y ademas se lo asigno a la variable llamada villano. Y
                                                // Si quiero puedo agregar mas datos para importar, pero adentro de las llaves
import {join} from "path" // Aca vamos a desestructurar el join de path

// let rutaArchivo = join(__dirname, "ECMAscriptModules", "file.txt") -----> esto no existe aca en Script Module, pero si en el NodeCommonJS, a menos que lo armemos de forma casera a mano (tiempo de la clase 1:05:00)

/*DENTRO DE LO POSIBLE, EN LOS ARCHIVOS EN LOS QUE EXPORTO INFORMACION NO DEBERIA TENER CODIGO EJECUTABLE, YA QUE CUANDO IMPORTO
TAMBIEN ME VOY A TRAER LOS Console.log O LO QUE TENGA Y TAMBIEN SE VA A EJECTURAR*/

let Persona1 = new Persona ("seba", "rios");
console.log(Persona1.saludo())

console.log(usuarios)
console.log(suma(10, 5))

let heroe1 = new Heroe("robbin", "hombreVerde")
console.log(heroe1.verIdentidad())

console.log(varios.f1(6, 7))


//llamo a la clase Calculadora
import {Calculadora} from "../ejercicio1A/ejercicio1.js"; // aca adentro de la llave puedo traer/importar mas clases en caso de que tengas mas clases en ese archivo y quiera traerlas aca. Cuando uso "defalut" despues de export en la clase que estoy exportando no hace falta que encierre el nombre de la clas entre llaves{}
const c1 = new Calculadora(); // aca creo una instancia de la clase claculadora. aca en los () no van valores salvo que la clase tenga un constructor definido que espera parametros
c1.sumar(1,2); // sin el constructor de arriba no puedo llamar a los metodos de la clase 

//llamo a la clase Calculadora2
import {Calculadora2} from "../ejercicio1A/ejercicio1.js";
const c2 = new Calculadora2(2,3);
c2.sumar(); 


//importDinamic
const modo = "calculo";
const ejemploImportDinamic = async () => { // es una funcion flecha
  if (modo == "calculo") {
    const {Calculadora} = await import("../ejercicio1A/ejercicio1.js"); // solo se va a importar cuando llame a la funcion
    const c3 = new Calculadora();
    c3.sumar(1,2);
    c3.restar(1,2);
  }
}
ejemploImportDinamic(); // Estoy llamando a la funcion "ejemploImportDinamic", y al hacerlo estoy llamando a la clase Calculadora, si no llamo a la funcion tambien estoy importando la clase Calculadora
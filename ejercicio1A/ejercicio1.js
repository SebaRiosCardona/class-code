//Forma 1 para crear una clase y usarla en el archivo test.js
export class Calculadora { // al poner "export" puedo exportarla en otra carpeta, por ejemplo en la de test.js. y al poner "default" significa que va a ser la unica clase que voy a exportar del archivo
  sumar(valor1, valor2) {
    console.log(valor1 + valor2);
  }
  restar(valor1, valor2) {
    console.log(valor1 - valor2);
  }
}


//Forma 2 para crear una clase y usarla en el archivo test.js
export class Calculadora2 { // al poner "export" puedo exportarla en otra carpeta, por ejemplo en la de test.js. y al poner "default" significa que va a ser la unica clase que voy a exportar del archivo
    constructor(a,b){
      this.a = a;
      this.b = b
    }
    sumar() {
      console.log(this.a + this.b);
    }
    restar() {
      console.log(this.a - this.b);
    }
}
  
  
class Contador {
  static contador = 0;

  constructor(nombre) {
    this.nombre = nombre;
    Contador.contador++;
  }
  
  contar () {
  console.log(Contador.contador);
  }

  static ObtenerContador() {
    return Contador.contador;
  }
}

const seba = new Contador ("seba");

seba.contar();
console.log(Contador.ObtenerContador()); // Muestra: 1
class Personas {
  constructor(nombre, edad) {
    this.nombre = nombre;
    this.edad = edad;
  }

  saludar () {
    console.log("hola, soy " + this.nombre + " y tengo " + this.edad);
  }

  getNombre() {
    return this.nombre;
  }
  getEdad() {
    return this.edad;
  }

  setNombre(nombre) {
    this.nombre = nombre;
  }
  setEdad(edad) {
    if (edad >= 0) {
      this.edad = edad;
      console.log(this.edad);  
    } else {
      console.log("pone bien la edad mono")
    }
    
  }
}

const persona1 = new Personas("seba", 28);
persona1.saludar();
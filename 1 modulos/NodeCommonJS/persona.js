class Persona {
  constructor(nombre, apellido) {
    this.nombre = nombre,
    this.apellido = apellido
  }
  get nombreCompleto() {
    return `${this.nombre} ${this.apellido}`
  }
  saludo() {
    return `hola soy ${this.nombre}`
  }
}

/*Si necesito usar esta clase en otro lado voy a hacer lo siguiente:
  Aca solo estoy queriendo exportar una sola cosa*/
module.exports = Persona // estamos queriendo exportar la clase (NO AL ARCHIVO COMPLETO)
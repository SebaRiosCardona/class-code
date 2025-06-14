export default class Persona { //De esta forma exporta la clase persona
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

const usuarios = [
  {
    id: 1,
    nombre: "paula"
  },
  {
    id: 2,
    nombre: "seba"
  },
  {
    id: 3,
    nombre: "anto"
  },
]

const f1 = (a, b) => {
  return a + b;
}

const f2 = (a, b) => {
  return a - b;
}

class Heroe {
  constructor(nombre, alias) {
    this.nombre = nombre,
    this.alias = alias
  }

  verIdentidad (){
    return ` la identidad de ${this.nombre} es ${this.alias}`
  }
}

//module.exports = Heroe //Solo estoy exportando la clase Heroe, asique no podria acceder a las demas funciones y arrays del archivo

//Para exportar mas de una cosa lo puedo encerrar dentro de un objeto
module.exports = {Heroe, f1, f2, usuarios}
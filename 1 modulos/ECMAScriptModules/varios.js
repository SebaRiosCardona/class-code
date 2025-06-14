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
export default class Villanos {
  constructor(nombre, alias) {
    this.nombre = nombre,
    this.alias = alias
  }

  verIdentidad (){
    return ` la identidad de ${this.nombre} es ${this.alias}`
  }
}

//module.exports = Heroe //Solo estoy exportando la clase Heroe, asique no podria acceder a las demas funciones y arrays del archivo

/*Al igual que el archivo con una sola clase, para exportar muchos archivos puedo ponerle "export" adelante de cada cosa que quiera
exportar, hacerlo todo junto al ultimo */
export {usuarios, f1, f2, Heroe}
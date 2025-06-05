//como se trabaja con archivos y se carga en memoria el modulo de archivo tengo que hacer el fs
const fs = require("fs")

//pide tambien que las claves de los usuarios esten codificadas, por eso le pedimos que cargue el modulo crypto
const crypto = require("crypto");
const { dirname } = require("path");

class UserManager { //no usan una clase como molda para crear instancias de la clase sino para agrupo los comportamientos que van a tener en esta clase
  constructor(rutaArchivo) {//cuando demos de alta este userManager se va a tener que pasar la ruta del archivo
    this.path = rutaArchivo//aca no definimos una propiedad sino un una ruta de archivo
  }
  //Ahora van los metodos
  async getUsuario(){
    if (fs.existsSync(this.path)) {//aca pregunto si el archivo existe, y si existe voy a pedir que haga algo
      /*aca estoy diciendo que ejecute este metodo de leer, el cual devuelve una promesa. Que espere a que se resuelva la promesa,
        y acese resultado devuelto, el cual va a ser un archivo en formato texto, lo mande como argumento del parse, entonces va a devolver el objeto*/
      return JSON.parse(await fs.promises.readFile(this.path, {encoding:"utf-8"}))
    } else {
      return []; //si el archivo no existe no voy a leer nada entonces devuelvo un array vacio
    }
  }
}
const path = require('path');

//console.log(userManager.getUsuario) //esto va a devolver una promesa de arreglo vacio porque toda operacion async (es decir los return que tiene adentro) va a devolver una promesa
//para resolver la promesa hago lo siguiente:
const entorno = async () => {
  console.log("DIRNAME:",__dirname)
  console.log("RUTA ABOSLUTA A MANO:",__dirname + "/data/ejercicio.json")
  console.log("RUTA CON path.join:",path.join(__dirname, "data", "ejercicio.json"))
  //let userManager = new UserManager("./data/ejercicio.json") // aca estoy enviando la ruta cuando llamo el constructor. RUTA RELATIVA
  //let userManager = new UserManager(__dirname+"/data/ejercicio.json") // aca estoy enviando la ruta cuando llamo el constructor. RUTA ABOSLUTA
  let userManager = new UserManager(path.join(__dirname, "data", "ejercicio.json")) // aca estoy enviando la ruta cuando llamo el constructor. RUTA ABOSLUTA
  try{
    console.log(await userManager.getUsuario())
  } catch (error){
    console.log(error.message);
  }
}

entorno() // esto me va a devolver el array de objetos que tengo en el archivo json: [ { usuario: 'seba' }, { usuario: 'anto' } ]
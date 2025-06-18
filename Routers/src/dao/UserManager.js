//como se trabaja con archivos y se carga en memoria el modulo de archivo tengo que hacer el fs
import fs from "fs"
import path from "path"

export default class UserManager { //no usan una clase como molda para crear instancias de la clase sino para agrupo los comportamientos que van a tener en esta clase
  constructor(rutaArchivo) {//cuando demos de alta este userManager se va a tener que pasar la ruta del archivo
    this.path = rutaArchivo//aca no definimos una propiedad sino un una ruta de archivo
  }
  //Ahora van los metodos
  async leerUsuarios(){
    if (fs.existsSync(this.path)) {//aca pregunto si el archivo existe, y si existe voy a pedir que haga algo
      /*aca estoy diciendo que ejecute este metodo de leer, el cual devuelve una promesa. Que espere a que se resuelva la promesa,
        y acese resultado devuelto, el cual va a ser un archivo en formato texto, lo mande como argumento del parse, entonces va a devolver el objeto*/
      return JSON.parse(await fs.promises.readFile(this.path, {encoding:"utf-8"}))
    } else {
      return []; //si el archivo no existe no voy a leer nada entonces devuelvo un array vacio
    }
  }

  async leerById(id){
    let usuarios = await this.leerUsuarios()
    let usuario = usuarios.find(u=>u.id===id)
    return usuario
  }

  async addUsuario(usuario) {
    //la forma de trabajo es asi, primero recupero todo de la mermoria,
    let usuarios = await this.leerUsuarios()

    //recuperamos el id
    let id = 1 // consideramos que esta vacia la memoria y le ponemos 1
    if (usuarios.length > 0) { //aca pregunto si el arreglo/el array usuarios tiene mas de 0 elementos (con length cuento los elementos del array)
      id = Math.max(...usuarios.map(d=>d.id))+1 //entonces aca determino cual es el id maximo (el mas alto) y le sumo 1
    }

    //entonces una vuelta que tengo el id, defino ls estructura del usuario que voy a crear:
    usuario = {
      id,
      ...usuario // esto es lo que va a llegar por parametro en addUsuario
    }

    usuarios.push(usuario) //al arreglo de objetos usuarios que tengo en memoria le agrego el usuario que estoy creando

    await fs.promises.writeFile(this.path, JSON.stringify(usuarios, null, 5))

    return usuario
  }

  async update(id, usuario) {//nos va a llegar el id y el usuario completo
    //la logica va a ser la misma de antes, recupero los datos de la memoria con el metodo que ya tengo (leerUsuarios)
    //Identificamos el que queremos modificar
    //y le asignamos los nuevos valores

    return {message: `se modifica el usuario de id ${id}`}
  }

  async delete(id) {// para la operacion solo necesitamos identifica el objeto que vamos a eliminar mediante el id
    //aca deberia ir la funcion para borrar

    //para confirmar que se realizar la operacion de borrar vamos a devolver el mensaje siguiente
    return {message: `se elimino el usuario con el id ${id}`}
  }
}

//exportamos estos modulos y tenemos que borrar/comentar todo lo que este en ejecucion y nos quedamos solo con la estructura de la clase
// module.exports = UserManager

// //console.log(userManager.getUsuario) //esto va a devolver una promesa de arreglo vacio porque toda operacion async (es decir los return que tiene adentro) va a devolver una promesa
// //para resolver la promesa hago lo siguiente:
// const entorno = async () => {
//   console.log("DIRNAME:",__dirname)
//   console.log("RUTA ABOSLUTA A MANO:",__dirname+"/data/usuarios.json")
//   console.log("RUTA CON path.join:",path.join(__dirname, "data", "usuarios.json"))
//   // let userManager = new UserManager("./data/ejercicio.json") // aca estoy enviando la ruta cuando llamo el constructor. RUTA RELATIVA
//   let userManager = new UserManager(path.join(__dirname, "data", "usuarios.json")) // aca estoy enviando la ruta cuando llamo el constructor. RUTA ABOSLUTA
//   try{
//     console.log(await userManager.leerUsuarios())
//   } catch (error){
//     console.log(error.message);
//   }
// }

// entorno() // esto me va a devolver el array de objetos que tengo en el archivo json: [ { usuario: 'seba' }, { usuario: 'anto' } ]
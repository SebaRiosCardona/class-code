const fs = require("fs")

let ruta = "./archivoPromesas.txt"
let texto = "ewqeqewqewqeqweqwewqewqewqeqweqweqwewq"

// fs.promises.writeFile(ruta,texto, {encoding:"utf-8"}) //texto tambien tiene que estar en forma string
// //writeFile devuelve una promesa
//   .then(() => {
//     console.log("archivo escrito")

//     return fs.promises.readFile(ruta, {encoding: "utf-8"})
//   })
//   .then((LoQueLei) => {
//     console.log(LoQueLei)
//   })
//   .catch(error => console.log(error.message))

const app = async () => {
  await fs.promises.writeFile(ruta,texto, {encoding:"utf-8"})
  console.log("archivo guardado")

  let LoQueLee = await fs.promises.readFile(ruta, {encoding:"utf-8"})
  console.log(LoQueLee)

  await fs.promises.appendFile(ruta, "\nhola hola hola")
  console.log("archivo modificado")

  setTimeout(async () => {
      await fs.promises.unlink(ruta) //Si bien este await forma parte de la funcion asincrona, la funcion mas proxima a este await es la de setTimeOut, entonces a esa funcion tambien la tengo que definir como async
      console.log("archivo eliminado")
  }, 3000);
}
app()
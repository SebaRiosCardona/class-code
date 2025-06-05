//funciones asincronas
const suma = (a, b) => {
  return new Promise((res, rej) => {
    if (typeof a !="number" || typeof b !="number") {
      rej(new Error("solo numeros"))
    }
    res(a + b)
  })
}
//funciones asincronas
const multiplicar = (a, b) => {
  return new Promise((res, rej) => {
    if (typeof a !="number" || typeof b !="number") {
      rej(new Error("solo numeros"))
    }
    res(a * b)
  })
}

// //Se dice que se genera una funcion que termina siendo un entorno asincrono para manejar promesas
// const entorno = async () => { //con la palabra reservada async la funcion pasa a ser asincrona
//   let res1 = await multiplicar(5,4)//Aca le decimos que res1 espere a que finalice (a favor o en contra) la promesa encontrada en multiplicar (5 * 4)
//   let res2 = await multiplicar(3,2) //en cierto modo await va a manejar el orden de ejecucion porque esta expresion no se va a ejecutar hasta que no se resuelva la ejecucion de arriba de (5 * 4)
//   let resFinal = await (suma(res1, res2)) //aca digo que "resFinal" espere a que se resuelva la promesa encontrada en la operacion suma(res1, res2)

//   console.log(resFinal);
// }//En cierto modo hago que la ejecucion sea sincrona porque tiene que esperar a que la ejecucion anterior finalice
// entorno()


// const entorno = async () => { 
//   let resFinal
//   try {
//   let res1 = await multiplicar(5,4)
//   let res2 = await multiplicar(3,2)
//   resFinal = await suma(res1, res2)
//   } catch (error) {
//     console.log(error.message)
//     return
//   }
//   console.log(resFinal)
// }
// entorno()

async function app2(params) {

}
const app3 = async function () {
  return "buenas tardes"
}
app3().then(res => console.log(res))
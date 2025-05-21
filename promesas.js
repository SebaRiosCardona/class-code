// const suma = (a, b) => { //la funcion suma recibe dos argumentos (a, b)
//   return new Promise((res, rej) => { // lo primero que enviamos cuando trabajmos con promesas es un callback
//     //Va a tener dos metodos ("resolve" y "rej")
//     //Si la operacion que definimos aca adentro se resuelve de forma exitosa hacemos el retorno mediante el "res"
//     //Si la operacion que definimos aca adentro se resuelve de forma rechazada hacemos el retorno mediante el "rej"
//     if(typeof a!="number" || typeof b!="number"){
//       rej(new error("solo numeros")) //escribir "return" detras de rej es redundante, con esto ya se corta la ejecucion
//     }
//     res(a+b) //escribir "return" detras de rej es redundante, con esto ya se corta la ejecucion
//   })
// }

// console.log(suma(3,5)) //devuelve Promise { 8 }
// console.log(suma(3,5) + 10) //devuelve [object Promise]10

// suma(3,5).then(res=>console.log(res)) //Devuelve 8
// suma(3,5).then(res=>console.log(res + 10)) //Devuelve 18

const verNombre = (a, b) => { //la funcion suma recibe dos argumentos (a, b)
  return new Promise((res, rej) => { // lo primero que enviamos cuando trabajmos con promesas es un callback
    //Va a tener dos metodos ("resolve" y "rej")
    //Si la operacion que definimos aca adentro se resuelve de forma exitosa hacemos el retorno mediante el "res"
    //Si la operacion que definimos aca adentro se resuelve de forma rechazada hacemos el retorno mediante el "rej"
    if(typeof a!="number" || typeof b!="number"){
      rej(new Error("solo numeros")) //escribir "return" detras de rej es redundante, con esto ya se corta la ejecucion
    }
    res("seba") //escribir "return" detras de rej es redundante, con esto ya se corta la ejecucion
  })
}

console.log(verNombre(3,5)) //devuelve Promise { 'seba' }
console.log(verNombre(3,5) + 10) //devuelve [object Promise]10

verNombre(3,"11")
  .then(res=>console.log(res)) //Devuelve seba
  .catch(error=>console.log(error.message)) //Devuelve error is not defined
  .finally(console.log("operaciones de cierre")) //se ejecuta independiente si se resolvio de forma correcta o rechazada



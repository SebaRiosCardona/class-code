// //.map()
// const numeros = [1,2,3,4,5,6]

// const numerosDobles = numeros.map((value) => {
//   return value + value;
// })

// console.log(numerosDobles);

// //.push()
// const numeros = [1,2,3,4,5,6]
// numeros.push(10);
// console.log(numeros);

// //.find()
// const numeros = [1,2,3,4,5,6]
// const numeroEncontrado = numeros.find((value) => {
//   if (value == 5) {
//     console.log(value);
//   }
// })
// console.log(numeroEncontrado);

//.reduce()
const numeros = [1,2,3,4,5,6]
const numerosReduce = numeros.reduce((acumulador, value) => {
  return acumulador + value;
})
console.log(numerosReduce);
//Dados los objetos indicados en la siguiente diapositiva:
//Realizar una lista nueva (array) que contenga todos los tipos de productos (no cantidades), consejo: utilizar Object.keys y Array.includes. Mostrar el array por consola.
//Posteriormente, obtener el total de productos vendidos por todos los objetos (utilizar Object.values)

const objetos = [
  {
  manzanas: 3,
  peras: 2,
  carne: 1,
  jugos: 5,
  dulces: 2
  },
  {
  manzanas: 1,
  sandias: 1,
  huevos: 6,
  jugos: 1,
  panes:4
  }
]

const nuevoobjetos1 = Object.keys(objetos[0]);
console.log(nuevoobjetos1);
const nuevoobjetos2 = Object.keys(objetos[1]);
console.log(nuevoobjetos2);
const combinar = [...nuevoobjetos1, ...nuevoobjetos2];
console.log(combinar)

combinar.forEach(item => {
  if(!combinar.includes(item))
    combinar.push(item)
});



//Dados los objetos indicados en la siguiente diapositiva:
//Realizar una lista nueva (array) que contenga todos los tipos de productos (no cantidades), consejo: utilizar Object.keys y Array.includes. Mostrar el array por consola.
//Posteriormente, obtener el total de productos vendidos por todos los objetos (utilizar Object.values)

const productos = [ //este array tiene dos elementos que son objetos
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
] //Como esto es un array, hay que usar un metodo que recorra arrays

const tipos = []; //Se declara una variable en donde vamos a almacenar el resultado (va a ser un array)

productos.forEach((value) => { //ForEach() y map(), entre otro recorren arrays. Este array va a ir tomando como valor los elementos del array
  const typeProducto = Object.keys(value); //Como cada elementos del array son objetos voy a usar elementos de objetos, como Object.keys(). Object.keys(value) devuelve un array, por lo que "typeProducto" es un array
  console.log(typeProducto);

  typeProducto.forEach((type) => {
    if (!tipos.includes(type)) //Consulta si ya existe ese item en la lista recorrida, si existe pasa al siguiente, y si no existe lo agrega a la lista
      tipos.push(type);
  })
});

console.log(tipos);
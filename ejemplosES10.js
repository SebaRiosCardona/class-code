//.trim()
const mensaje = "     hola    ";
console.log({mensaje}); // lo imprime como un objeto { mensaje: '     hola    ' }
console.log(mensaje) //      hola    

const eliminarEspacios = mensaje.trim();
console.log({eliminarEspacios}); // lo imprime como un objeto { eliminarEspacios: 'hola' }
console.log(eliminarEspacios) // hola    

//.flat()
const numeros = [3, 4, 5, 6, 7, 8];
console.log(numeros); // devuelve el array [ 3, 4, 5, 6, 7, 8 ]
console.log(numeros.flat()); // devuelve el array [ 3, 4, 5, 6, 7, 8 ]

const numerosNuevo = [3, 4, 5, [23, 34, 45, 56], 6, 7, 8];
console.log(numerosNuevo); // devuelve [ 3, 4, 5, [ 23, 34, 45, 56 ], 6, 7, 8 ]
console.log(numerosNuevo.flat()); // devuelve [ 3,  4, 5, 23, 34, 45, 56, 6,  7,  8 ]
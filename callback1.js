let numeros = [1,2,3,4,5];
let numeroCuadrado = numeros.map(elemento=>elemento**2); //Es una funcion anonima. Esta funcion anonima es una funcion callback
console.log({numeros});
console.log({numeroCuadrado});
console.table({numeros, numeroCuadrado});

//La forma tradicional de escribir esta funcion seria asi:
let numeros2 = [1,2,3,4,5];
let numeroCuadrado2 = numeros2.map(function(elemento) { //Esta funcion anonima es una funcion callback
  return elemento = elemento**2;
});
console.log({numeros2});
console.log({numeroCuadrado2});
console.table({numeros2, numeroCuadrado2});

/*
el metodo .map() tiene como parametro una funcion callback, que lo que haces es recorrer el array y por cada elemento
del array va a ejecutar la funcion que se pasa como parametro
*/
//explicando lo que hace el metodo .map()
let miMap =(arreglo=[], funcionCallBack)=>{ // por cada elemento del arreglo se va a ejecutar la funcion "funcionCallBack"
  let arregloResultado = [];
  for(let i = 0; i<numeros.length; i++){
    let resultado = funcionCallBack(arreglo[i]) //a la funcion le paso como argumento el elemento que se va a recorrer de ese arreglo (cuando i=0 se va a operar sobre el primer elemento del array, que va a ser 1, y asi sucesivamente)
    arregloResultado.push(resultado)
  }
  return arregloResultado;
}

cuadrados = miMap(numeros, elemento=>elemento**2)
console.log(cuadrados) //llamando a la funcion miMap obtengo lo mismo que al aplicar el metodo .map() de antes 
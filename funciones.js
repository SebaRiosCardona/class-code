//esta forma conviene (puedo guardar el resultado de la funcion en una variable)
function sumar(a, b){
  suma = a + b
  return suma;
}
const ejercicioSuma = sumar(1,2)
console.log(ejercicioSuma)

//esta forma tambien esta bien pero se recomienda la otra 
function sumar2(a, b){
  suma = a + b
  console.log(suma)
}
sumar2(3,4);
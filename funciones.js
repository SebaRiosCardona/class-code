function saludar() {
  decirHola = "hola"
  console.log(decirHola)
  return saludar
}
saludar()
console.log(decirHola)

const sumar = (valor1, valor2) => {
  suma = valor1 + valor2; // esto va a devolver un Undefined + Undefined
  return suma;
}

y = sumar(2,4)
console.log(y)
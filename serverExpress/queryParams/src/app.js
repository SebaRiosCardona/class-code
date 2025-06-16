const express = require("express")

let heroes = [
  {
    id: 1,
    nombre:"spiderman",
    alias:"el loco ara;a"
  },
  {
    id: 2,
    nombre:"superman",
    alias:"el loco maquina"
  },
  {
    id: 3,
    nombre:"superman",
    alias:"el loco maquina"
  },
  {
    id: 4,
    nombre:"superman",
    alias:"el loco maquina"
  },
  {
    id: 5,
    nombre:"superman",
    alias:"el loco maquina"
  },
]//un sniped es un arreglo de objeto con la misma info cada objeto

const PORT = 3000

const app = express()
app.get("/", (req, res) => {//siempre esta funcion de callback va a recibir dos argumentos, "req" todo lo que llega de cliente, y res es lo que vamos a responder nosotros
  res.send("home page")//Aca generamos la respues
}) //ponemos get porque la peticion que queres hacer la emite un navegador y por defecto un navegador emite peticiones de tipo get
app.get("/heroes", (req,res) => {

  //en la req hay un objeto que se llama query que me permite pasar query params y si lo imprimo lo veo en la terminal
  console.log(req.query)
  let datos = heroes //esto lo hago para no modificar el arreglo original
  let limit = req.query.limit //aca digo que limit es la propiedad limit de este objeto, y al pasarlo como queryParams lo uso como
                              //limite para que me devuelva un parte del arreglo de objetos y no todo
  if (limit && limit>0) { //Si llega un query que se llama limit y es mayor a cero que se imprima lo siguiente:
    datos = datos.slice(0, limit) //slice es un metodo asociado a los elementos de tipo array para hacer un recorte, en este caso desde
                                  //la posicion 0 hasta la posicion que indica limit (el cual indico por queryParams)
                                  //Si no llega ningun queryParams que sea limit no se va a entrar a este ir y se va a devolver todos
                                  //los datos del array, pero si entra se va a recortar el array desde 0 a limit
  }

  res.json(datos)
}) 
app.get("/heroes/:id", (req,res) => { //ESTO EXPRESS LO VA A LEER COMO UN PARAMETRO QUE VA A LLEGAR DESDE LA URL, el cual lo podemos tomar de la siguiente forma:
  let id = req.params.id//uso req porque voy a usar algo que va a llegar desde la peticion
  console.log(id)
  id = Number(id) //Aca convierto el tipo de dato del id (de string a numero). Si trato de aplicar esta conversion a un string que sea "seba", el resultado de hacer esto sobre un string que no sea un numero va a ser un tipo de dato denominado NotANumber (NAN)
  if(isNaN(id)){ //aca pregunto si id es de tipo NAN, si lo es respondo un error
    return res.json({error:"ingrese un id numerico"})
  }

  let heroe = heroes.find(h => h.id === id)
  if (heroe){
    res.json(heroe)
  } else (
    res.json({error: `no hay heroe con ese id ${id}`})
  )
})

app.get("/heroes/nombre/:nombre", (req,res) => {
  let nombre = req.params.nombre

  let heroe = heroes.find(h => h.nombre.toLowerCase() === nombre.toLowerCase()) //toLowerCase es un metodo, asique tenemos que agregarle los parentesis
  if (heroe){
    res.json(heroe)
  } else (
    res.json({error: `no hay heroe con ese nombre ${nombre}`})
  )
})
app.listen(PORT, ()=> console.log(`server online en puerto ${PORT}`))

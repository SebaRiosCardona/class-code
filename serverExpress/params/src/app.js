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
  }
]//un sniped es un arreglo de objeto con la misma info cada objeto

const PORT = 3000

const app = express()
app.get("/", (req, res) => {//siempre esta funcion de callback va a recibir dos argumentos, "req" todo lo que llega de cliente, y res es lo que vamos a responder nosotros
  res.send("home page")//Aca generamos la respues
}) //ponemos get porque la peticion que queres hacer la emite un navegador y por defecto un navegador emite peticiones de tipo get
app.get("/heroes", (req,res) => {

  //en la req hay un objeto que se llama query que me permite pasar query params y si lo imprimo lo veo en la terminal
  console.log(req.query)
  let datos = heroes
  let limit = req.query.limit
  if (limit && limit>0) {
    datos = datos.slice(0, limit)
  }

  res.json(heroes)
})
app.get("/heroes/:id", (req,res) => { //ESTO EXPRESS LO VA A LEER COMO UN PARAMETRO QUE VA A LLEGAR DESDE LA URL, el cual lo podemos tomar de la siguiente forma
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

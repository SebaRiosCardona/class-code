//como en el package.json no tengo el type="module" voy a usar el esquema de CommonJS
const express = require('express');
const petsRouter = require ('./routes/pets.routes')//puedo hacer esto porque no lo estoy exportando desde adentro de un objeto 
const usersRouter = require ('./routes/users.routes')
const PORT = 3000; //defino el puerto

const app = express(); // inicializo express en la variable app

//Genero estas do instrucciones para que expres entienda y maneje como JSON los datos completos que llegan en un request
app.use(express.json());
app.use(express.urlencoded({extended:true}))

app.use("/api/pets", petsRouter) //aca configuro la ruta. Todas las consultas que llegue a /api/pets quiero que las resulva el petsRouter
app.use("/api/users", usersRouter)

//Este es el endpoint para indicar que todo funcion bien
app.get('/', (req, res) => {
  res.setHeader('Content-Type', 'text/plain');
  res.status(200).send('ok');
})

//Levanto el servidor y lo pongo a escuchar en el puerto que elegi
const server = app.listen(PORT, () => {
  console.log(`Server escuchando el puerto ${PORT}`)
})
import express from 'express';
import UserManager from "./dao/UserManager.js";

const PORT = 3000;
const app = express() //tenemos un servidor express, en donde tenemos un alta de usuario ya que tenemos el metodo get “app.get(”/usuarios”)”

const userManager = new UserManager("./src/data/usuarios.json")

//cuando trabajmos con API Rest se usa el prefijo api para las rutas que van a devolver informacion
app.get('/api/usuarios', async(req, res) => {//tenemos un alta de usuario
  
  //con el skip indicamos que nos vamos a saltear numeros, por ejemplo skip=5 es para que nos traiga datos del 5 en adelante
  let {limit, skip, nombre} = req.query

  console.log(skip,nombre)

  let usuarios = await userManager.leerUsuarios()
  if(limit) {
  usuarios = usuarios.slice(0, limit)
  }

  res.json(usuarios)
})

app.get("/api/usuarios/:id", async(req, res) => {
  let id = req.params.id
  id = Number(id)
  if(isNaN(id)){
    return res.json({error:`Ingrese el ide numerico`})
  }

  try {
    let usuarios = await userManager.leerById(id)
    if(!usuarios){
      return res.json({message:`No existe usuario con id ${id}`})
    }

    return res.json(usuarios)
  }catch (error) {
    console.log(error)
    return res.json({error:"error desconocido"})
  }
})

app.listen(PORT, () => console.log(`server online en puerto ${PORT}`))



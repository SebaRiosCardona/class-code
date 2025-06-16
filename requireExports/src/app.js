//sabes trabajar desde el app modulos nativos de node, y ya sabemos trabajar con modulos externos a node con npm intall y ahora nos
//falta saber trabajar con modulos que hayamos generado nosotros, por ejemplo del de UserManager.js. Para hacerlo necesito requerirlos
//desde este archivo
import express from "express"
import UserManager from "./dao/UserManager.js"

const PORT = 3000
const app = express()

const userManager = new UserManager("./src/data/usuarios.json")//para que el archivo funcion necesita la ruta hacer el archivo

app.get("/api/usuarios", async(req, res) =>{ //usamos /api para indicar que trabajamos con api

let{limit, skip, nombre} = req.query //skip se va  usar para indicar que no queremos los datos desde el 0 sino que nos vamos a saltear algunos
console.log(skip, nombre)

  let usuarios = await userManager.leerUsuarios()
  if(limit){
    usuarios = usuarios.slice(0, limit)
  }

  res.json(usuarios)
})

app.get("/api/usuarios/:id", async(req, res) => {
  let is = req.params.id
  id = Number(id)
  if(isNaN(id)){
    return res.json({error: `ingres el id numerico`})
  }

  try {
    let usuario = await userManager.leerUsuarios(id)
    if(!usuarios){
      return res.json({message: `no existe usuario el id ${id}`})
    }
    return res.json(usuario)
  }catch (error) {
    console.log(error)
    return res.json({error: "error desconocido"})
  }
})

app.listen(PORT, () => console.log(`server online en puerto ${PORT}`))
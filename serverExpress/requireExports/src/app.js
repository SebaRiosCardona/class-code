//sabes trabajar desde el app modulos nativos de node, y ya sabemos trabajar con modulos externos a node con npm intall y ahora nos
//falta saber trabajar con modulos que hayamos generado nosotros, por ejemplo del de UserManager.js. Para hacerlo necesito requerirlos
//desde este archivo
const express = require("express")
const UserManager =  require("./classes/UserManager") // y con esto estamos cargando toda la logica que teniamos en este script a este archivo app.js asignado a la variable "UserManager"

const PORT = 3000
const app = express()

//entonces aca voy a usar el modulo que cree en UserManager, solo tengo q tenes presenta que necesita como parametros y listo, lo puedo llamar y usarlo
//En este caso como el modulo es una clase lo llamo con la instancia new. Si hubiese sido una funciona solo la tengo que ejecutar
const userManager = new UserManager("./src/data/usuarios.json")//para que el archivo funcion necesita la ruta hacer el archivo

app.get("/usuarios", async(req, res) =>{ //yo aca estoy en un servidor y me llego una peticion
  let usuarios = await userManager.leerUsuarios()//uso el await porque trabajamos con funciones asincronas

  res.json(usuarios)//entonces como me llego una peticion voy a tener que generar una response
})

app.listen(PORT, () => console.log(`server online en puerto ${PORT}`))
import {Router} from 'express'//Desde express importamos algo (en este caso una funcion que se llama Router)
                              //Se puede exportar de cualquier forma que vimos, por ejemplo exportar todo express y despues llamar
                              //a la funcion con un express.router, o de la forma que sea
import UserManager from "../dao/UserManager.js"//esta importacion viene de la app.js (por lo que voy a tener que corregir la direccion)
                                               //Cada punto que agrego al comienzo es un nivel mas que bajo
                            
export const router = Router()//A la funcion router la voy a inicializar asociada a una variable que defino como router, y la voy a exportar
                              //La exporto porque despus la voy a tener que importar de la app.js. Y cuando lo importe desde la app.js
                              //lo voy a importar como.... y le pongo el nombre como quiera llamarla desde la app.js


// router.get('/', (req, res) => {//al igual que antes, en lugar de llamar al metodo con app, lo hago con router, y asi con todos los metodos

//   res.setHeader('Content-Type', 'application/json')
//   res.status(200).json({})
// })

//Lo que voy a hacer es traer todo lo relacionado con usuarios
//Como en cada metodo tambien estoy usando a los metodos de la clase UserManager, lo voy a tener que traer tambien aca de la app.js

const userManager = new UserManager("./src/data/usuarios.json")//para que el archivo funcion necesita la ruta hacer el archivo

//Basicamente lo que haces es generar rutas, en donde vamos a ir modificando el metodo para indicar la operacion a realizar


//Como esto lo trajimos de la app.js voy a tener que modificar el app que venis del app.js por router
router.get("/", async(req, res) =>{ //usamos /api para indicar que trabajamos con api

let {limit, skip, nombre} = req.query //Guardo la informacion en un "query" de la request
//skip se va a usar para indicar que no queremos los datos desde el 0 sino que nos vamos a saltear algunos
console.log(skip, nombre)

  let usuarios = await userManager.leerUsuarios() 
  if(limit){
    usuarios = usuarios.slice(0, limit)
  }

  res.json(usuarios)
})

//Recibimos la informacion por un QueryParams
router.get("/:id", async(req, res) => {
  let id = req.params.id //Guardo la informacion en un "params" de la request
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

//En las peticiones de tipos post los datos puede seguir llegando por queryPararms (los que van despues del ? en la URL), Pero
//la informacion en estos casos, o de tipo put la informacion suele ir en el cuerpo de la peticion (body)
router.post("/", async (req, res) => {
//Teniendo habilitadas las dos opciones con el codigo app.use de arriba puedo hacer lo siguiente

//Los mas comun es desestructurar la informacion en el body (en este caso desestructura nombre y email)
  let {nombre, email} = req.body //Guardo la informacion en un "body" de la request

  //validacion
  if (!nombre || !email) { //Preguntamos si nombre y email no existen
    res.setHeader('Content-Type', 'application/json');
    return res.status(400).json({error:`Complete nombre / email`}) //en estos dos renglones respondemos con un error y sale
  }

  //resto validaciones (por ejemplo que no existe un usuario con el mismo mail, que el nombre o el email sean validos, etc)

  //Como manejamos metodos asincronos usamos un try...catch
  try {
    let nuevoUsuario = await userManager.addUsuario({nombre, email}) //todo lo que se retorna de un metodo asincrono es una promesa

    res.setHeader('Content-Type', 'application/json');
    return res.status(200).json(nuevoUsuario)

  } catch (error) {
    res.setHeader('Content-Type', 'application/json');
    return res.status(500).json({error:`error de servicio`})
  }
})

router.put("/:id", async(req, res) => { //nos va a tener que llegar el id de lo que queremos modificar
  let id = req.params.id //Guardo la informacion en un "params" de la request
  id = Number(id)
  if(isNaN(id)){
    return res.json({error: `ingres el id numerico`})
  }

  //Como es el orden correcto:
  //  Tenemos que recuperar la informacion desde el body
  //  Hacer las validaciones que correspondan
  //  Generar otra funcion en el UserManager.js llamada update()

  try {
    let usuarioModificado = await userManager.update(id, {})//le paso el id y el usuario del body que tengo que modificar
    res.setHeader('Content-Type', 'application/json');
    return res.status(200).json(usuarioModificado)

  }catch (error) {
    console.log(error)
    return res.json({error: "error desconocido"})
  }
})

router.delete("/:id", async(req, res) => {
  let id = req.params.id //Guardo la informacion en un "params" de la request
  id = Number(id)
  if(isNaN(id)){
    return res.json({error: `ingres el id numerico`})
  }

  //invocamos una funcion del UserManager.js para eliminar el objeto del array
  try {
    let usuarioEliminado = await userManager.delete(id)
    //igual que antes aca vamos a generar la respuesta de error 200
    res.setHeader('Content-Type', 'application/json');
    return res.status(200).json(usuarioEliminado)

  }catch (error) {
    console.log(error)
    return res.json({error: "error desconocido"})
  }
})

const PetsManager = require ('../dao/petsManager');
//dos formas para importar Router de express

// const Router = require ('express').Router;
// const router = Router
const express = require("express") //importamos express
const router = express.Router() //nos traemos router de express y lo inicializamos en una variable llamda router

//como en este router vamos a manejar mascotas vamos a tener que crear la variable
let petsManager = new PetsManager ()

router.get('/', (req, res) => {

  //esto deberia ir adentro de un control de errores como try..catch
  let pets = "devuelve todas las mascotas" //aca deberiamos tener el metodo que devuelve todas las marcotas, como petsManaget.getAll()

  res.setHeader('Content-Type', 'application/json')
  res.status(200).json({pets})
})

router.post('/', (req, res) => {

  let nuevoPet = "nuevo pet generado" //petsManager.create(pet)

  res.setHeader('Content-Type', 'application/json')
  res.status(201).json({nuevoPet})
})

router.put('/:id', (req, res) => {//el put requiere que indiquemos el id en la ruta

  let {id} = req.params//aca desestructuramos el id

  //validar que el id sea numerico
  //sacar las modificaciones del body ya que seguramente vengan del body, y validarlas
  let aModificar = req.body // la varaible aModificar, en este caso, va a ser igual a todo lo que esta en el body
  //a esta varaible le aplicamos la logica para purgarlo y saber que queremos y que no queremos guardar

  let petModificado = `pet ${id} modificado` //petsManager.update(id, aModificar) ...las modificaciones vienen del body

  res.setHeader('Content-Type', 'application/json')
  res.status(201).json({petModificado})
})

router.delete('/:id', (req, res) => {

  let {id} = req.params//aca desestructuramos el id. Aca va params porque lo que se pasa por la ruta es un params

  //validar que el id sea numerico

  let resultado = `pet ${id} eliminado` //petsManager.delete(id)

  res.setHeader('Content-Type', 'application/json')
  res.status(201).json({resultado})
})

module.exports = router //exportamos router
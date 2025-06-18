const UserManager = require ('../dao/userManager')

const express = require ("express")
const router = express.Router()


let userManager = new UserManager()

router.get('/', (req, res) => {
  
  let users = "devuelve todos lo users" //userManager.getAll()

  res.setHeader('Content-Type', 'application/json')
  res.status(200).json({users})
})

router.delete('/:id', (req, res) => {
  
  //desestruturo el id de los params (de dos formas .. me quedo con la primera)
  let {id} = req.params //aca va params porque lo que se pasa por la ruta es un params, entonces queremos el id de la request
  //let id = req.params.id

  let resultado = `usuario ${id} eliminado` //userManager.delete(id)

  res.setHeader('Content-Type', 'application/json')
  res.status(200).json(resultado)
})

module.exports = router
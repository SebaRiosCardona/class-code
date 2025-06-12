//Con el "npm install express" instalamos express
const express = require ("express") //Aca le pedimos a node que cargue express en la memoria en la variable "express"
//Como estamos trabajando con servidores tenemos que definir un puerto
const PORT = 3000

//inicializamo express. Definimos una constante app en donde vamos a poner lo que inicializamos 
const app = express()
//Aca defino rutas con express (es distinto si no uso express)
app.get("/", (req,res) =>{ //primero va la ruta y luego el callback con el que quiero responder
  res.send("Server con express")
}) 
//Pagina de contacto
app.get("/contacto", (req,res) =>{ //primero va la ruta y luego el callback con el que quiero responder
  res.send("Pagina de contacto")
}) 

//Aca le pedimos a express que se pongan a escuchar lo que esta en el puerto 3000, y cuando termine ejecute la funcion de callback
app.listen(PORT, () => console.log(`server online en puerto ${PORT}`)) //con la funcino de callback me aseguro que funciono por lo que devuelve en la terminal

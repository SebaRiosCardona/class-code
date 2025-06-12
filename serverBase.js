//require es como el import pero nativo de node
const http = require("http") // el nombre de la variable puede ser cualquier, pero se recomienda que sea igual al modulo que estamos importante

/*Cuando se trabaja con sevidores tengo que configurar los puertos
Un puerto es una direccion de memoria en donde va a estar escuchando mi servidor

Los puertos sirven para que, cuando levante un servidor, tambien voy a querer que en el equipo en donde se esta corriendo el servior
se pueda correr mas de una aplicacion, Como ese servidor va a estar pendiente a recibir consultar todo el tiempo, si la conexion fuese 
con un unico canal estaria limitando el funcionamiento de mi equipo todo el tiempo.
justamente para evitar eso es que definimos puertos (direcciones en la memoria) y se la signamos a un  determindo servidor, entonces 
de esta forma voy a poder tener varios servidores corriendo en la misma maquina, cada uno en un puerto diferente.
Los puertos que se suele unsar son el 3000 o 8080

Pueden haber algunos programas que ya tengan un puerto estandarizado (los correos electronicos suelen trabajar con el puerto 25,
MongoDB utiliza el puerto 27017 por defecto, entonces si instalamos Mongo siempre va a levantar por defecto ese puerto, entonces deberia 
evitar manejarme con ese puerto para evitar conflicto
*/
const PORT = 3000

/*Luego se define una constante en donde va a ir nuestro servidor*/
/*createServer es un metodo, y queremos que este servidor, cuando le llegue alguna peticion ejecute algo (por eso la funcion de callback)
Esta funcion de callback tiene la particularidad de que va a tener dos arguemnto (requiere y response). En la req va a estar toda la 
info que llegue del cliente, y en la res va a estar toda la info que nosotros, como backend, le querramos devolver al cliente (el res
es el objeto en donde en donde vamos a configurar la respuesta*/
const server = http.createServer((req, res)=>{//entonces cuando llegue una peticion se ejecutara este callback

  console.log(req.url)
  if (req.url === "/heroes") {
    res.writeHead(200, {"Content-type":"text/html;charset=utf-8"})
    res.end("pagina de heroes")
    return //con el return salgo del condicional cuando el codigo entre por aca, si no pongo el return se va a ejecutar lo que sigue del if
  }

  //Puede ocurrar que el navegador no interprete bien el mensaje, entonces le tengo que pasar de que tipo es el contenido que le paso
  res.writeHead(200, {"Content-Type":"text/html;charset=utf-8"})//writeHead es una funcion, asociada al res, que me va a permitir escribir en la cabecera. el 200 indica que la 
  // operacion salio bien 
  //nos enfocamos en el response
  res.end("server basico con modulo http de node culiaaaaaaaa")//esto sirve para enviar un dato (por ejemplo este string)
})
/*despues de esto le tengo que decir al servidor que se levante y se pongan a escuchar peticiones del puerto asignado (3000).
Como argumento le paso el puerto (en este caso como una variable), y un callback que se dispara si esto se ejecuta bien*/
server.listen(PORT, ()=>{
  console.log(`server online en puerto ${PORT}`) //Si este mensaje aparece en la terminal cuando lo corro es decir que el servidor levanto bien
})
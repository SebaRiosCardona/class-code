//Esto es un spined, esto es un fragmento de codigo al cual le asociamos un grupo de caracteres, lo llamo con "serverES6"
import express from 'express';
const PORT = 3000; //Aca creamos la constante puerto con el numero del puerto que queremos que este escuchando el servidor

const app = express(); //inicialisamos express y lo asociamos a la variable app

//estas instrucciones sirven cuando queremos recibir informacion compleja desde el frontend
app.use(express.json()); // con esto manipulamos es informacion compleja (gracias a la instruccion de abajo) en formato json
app.use(express.urlencoded({extended:true})); //nos permite recibir archivos que no solo esten en formato texto

//Aca definimos una ruta
app.get('/',(req, res) => {
// si pongo * en lugar de / va a ingresar cualquier ruta, es decir que las que esten debajo de esta nunca se van a ejecutar
  res.setHeader('Content-Type', 'text/plain'); //aca le seteamos un header, que va a contener texto plano (sin el fondo blanco)
  res.status(200).send('ok'); //Ponemos por explicito el status code que le queremos mandar y el mensaje 
})

const server = app.listen(PORT, () => { //Aca ponemos el servidor a escuchar y lo asociamos a la variable "server", de esta forma podemos
                                        //llamar al servidor con esa misma variable y apagarlo o hacerle algo
  console.log('Sever escuchando en puerto PORT');
});
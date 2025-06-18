//sabes trabajar desde el app modulos nativos de node, y ya sabemos trabajar con modulos externos a node con npm intall y ahora nos
//falta saber trabajar con modulos que hayamos generado nosotros, por ejemplo del de UserManager.js. Para hacerlo necesito requerirlos
//desde este archivo
import express from "express"
import {router as usuariosRouter} from "./routes/usuariosRouter.js" //cuando hacemos una autoimportacion tiene que ir entre llaves para indicar que
                                                    //es lo que estoy trayendo y acordarse de poner la extension a la carpeta, en este caso "".js"
                                                    //y le asignamos algun nombre que tena sentido

const PORT = 3000
const app = express()

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use("/api/usuarios", usuariosRouter)//aca dejamos el enlace, en un solo renglon, la primer parte de la ruta, y todas las peticiones que llegue con
                                        //una ruta por esto (/api/usuarios, queremos que las atienda, en este caso "usuariosRouter")

app.listen(PORT, () => console.log(`server online en puerto ${PORT}`))
//sabes trabajar desde el app modulos nativos de node, y ya sabemos trabajar con modulos externos a node con npm intall y ahora nos
//falta saber trabajar con modulos que hayamos generado nosotros, por ejemplo del de UserManager.js. Para hacerlo necesito requerirlos
//desde este archivo
const express = require("express")

const PORT = 3000
const app = express()



app.listen(PORT, () => console.log(`server online en puerto ${PORT}`))
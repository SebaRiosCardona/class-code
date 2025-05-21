//const fs = require(”fs”) //En esta linea le indico a node que cargue en la variable fs la libreria que esta en “fs”. Es similar al “import” pero con un formato propio de node

const operacion3 = () => {
	console.log("")
	let fecha = Date.now()
	while(Date.now - fecha < 5000){
		//...
	}
	return operacion3;
}
console.log("operacion1")
console.log("operacion2")
console.log(operacion3())
console.log("operacion4")
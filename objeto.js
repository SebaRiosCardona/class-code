import estudiante from './claseEjemplo.js';

// const estudiante1 = {
//   nombre: "facundo",
//   apellido: "lore",
//   fechaNacimiento: "1997-05-13",
//   cursos: [
//     {
//       front: 7 
//     },
//     {
//       react: 8 
//     },
//     {
//       backend: null
//     }
//   ],
//   obtenerEdad: function() {
//     const fechaNacimientoObj = new Date (this.fechaNacimiento);
//   }
// }

// const estudiante2 = {
//   nombre: "seba",
//   apellido: "ceballos",
//   fechaNacimiento: "1998-11-13"
// }

// function calularEdad(fechaNacimiento) {

// }

const cursos1 = [
  {
    front: 7 
  },
  {
    react: 8 
  },
  {
    backend: null
  }
];
const cursos2 = [{front: 7 },{backend: null}];

const estudiante1 = new estudiante("seba", "rios", "1997-05-07", cursos1, false); //aca estoy usando el constructor y estoy creando un objeto que es una instancia de la clase
// cuando creo un objeto tengo que pasarle como parametro los atributos que la clase esta esperando, es decir un parametro que represente el nombre, otro que sea el apellido, etc.
const estudiante2 = new estudiante("juan", "cardona", "2000-06-01", cursos2, false);

const edad1 = estudiante1.obtenerEdad(); // aca estoy almacenando el resultado en una variable
console.log(edad1);
//es lo mismo hacer esto
console.log(estudiante2.obtenerEdad());

estudiante.cantidadDeInstancias(); // esto va a devolver 2, que serian dos instancias, por ejemplo dos estudiantes
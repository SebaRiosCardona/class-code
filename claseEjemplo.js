
export default class estudiante { //aca estoy permitiendo usar este clase en otro archivo, por ejemplo en el de objeto.js
  //atributos (basicamente pongo las variables. Son las caractersiticas de cada objeto).
  //Dentro de las clases no hace falta que declare las variables con const/let/etc.
  //Estoy definiendo los atributos
  #nombre;
  #apellido;
  #fechaNacimiento;
  #cursos;
  #estaBecado;

  static CONTADOR = 0; // aca estoy inicializando la varaible igual a cero

  //constructor (es lo primero que se va a ejecutar cuando llame a la clase)
  //Definio que valores van a tomar los atributos
  constructor(nombre, apellido, fechaNacimiento, cursos, estaBecado){ // suele ir el mismo nombre del atributo aunque no hace falta
    this.#nombre = nombre; //aca estoy diciendo que this.nombre va a ser lo mismo a lo que me pasen por parametro
    this.#apellido = apellido;
    this.#fechaNacimiento = fechaNacimiento;
    this.#cursos = cursos;
    this.#estaBecado = estaBecado; //Si bien aca YA estoy definiendo los atributos, no haria falta que lo haga arriba, aunque esta bien que este
 
    estudiante.CONTADOR = estudiante.CONTADOR + 1;
  }

  //metodos (son las operaciones/funciones que quiera hacer con los datos que les pase)
  obtenerEdad() {
    const fechaNacimientoObj = new Date(this.#fechaNacimiento);
    if (isNaN(fechaNacimientoObj)) {
      console.error("Fecha inválida:", this.#fechaNacimiento);
      return NaN;
    }
  
    // Le sumo 3 horas por el UTC, ya que estamos en Argentina
    fechaNacimientoObj.setHours(fechaNacimientoObj.getHours() + 3);
    let fechaActual = new Date();
    
    // Le resto 3 horas por el UTC, ya que estamos en Argentina
    fechaActual.setHours(fechaActual.getHours() - 3);
  
    // Obtener el día y el mes de la fecha de nacimiento
    let diaNacimiento = fechaNacimientoObj.getDate();
    let mesNacimiento = fechaNacimientoObj.getMonth() + 1; // devuelve el mes del 0-11 por eso le sumo 1
  
    // Obtener el día y el mes de la fecha actual
    let diaActual = fechaActual.getDate();
    let mesActual = fechaActual.getMonth() + 1; // devuelve el mes del 0-11 por eso le sumo 1
  
    // Calcular la edad
    let edad = fechaActual.getFullYear() - fechaNacimientoObj.getFullYear();
  
    // Ajustar la edad si el mes actual es antes del mes de nacimiento,
    // o si es el mismo mes pero el día actual es antes del día de nacimiento
    if (mesActual < mesNacimiento || (mesActual === mesNacimiento && diaActual < diaNacimiento)) {--edad;}
  
    return edad; //Este metodo devuelve la edad porque aca tengo un "return edad;"
  }

  static cantidadDeInstancias () {
    console.log(estudiante.CONTADOR);
  }
}


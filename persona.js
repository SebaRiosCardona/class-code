class Estudiantes {

  //Atributos
  #nombre; //Agregando # estoy diiendo que este atributo/variable es privado y solo se puede usar en esta clase y no cualquier persona que acceda a esa clase
  #apellido;

  //Constructor
  constructor() {//En el constructor inicializo la variable
    this.#nombre = "seba";
    this.#apellido = "rios"; 
  }

  //Metodos - tambien puedo hacer privado metodos agregando # al comienzo
  combinacionNombre() {
  }
}

public class Personas {
  private String nombre; //Aca estoy declarando dos atributos privados, que van a pertenecer a cada objeto que se cree de esta clase
  private int edad; //private significa que solo puedo acceder a estos atributos a traves de su clase "Personas"

  //constructor
  // public Personas(String nombre, int edad) { //Este constructor se crea cuando creo un nuevo objeto de la clase con "new Personas(...)"
  //   this.nombre = nombre; //Aca estoy asignando el valor que recibo por parametro (nombre) al atributo del objeto (nombre)
  //   this.edad = edad;
  // }

  public Personas(String n, int e) {
    this.nombre = n;
    this.edad = e; //el nombre de los valores que recibo por parametro no tienen porque se iguales a los atributos de la clase
  }

  public void saludar() {
    System.out.println("HOLA SOY " + nombre + "y tengo" + edad + "edad");
  }

  public String getNombre() {
    return nombre;
  }

  public int getEdad() {
    return edad;
  }

  public void setNombre(String nombre) { //Este método permite cambiar el valor del atributo nombre.
                                         //Lo que le paso por parametro (String nombre) es el nuevo valor que quiero asignar
    this.nombre = nombre; //Aca estoy asignando el valor del parametro al atributo del objeto
  }

  // public void setEdad(int edad) {
  //   this.edad = edad;
  // }

  public void setEdad(int edad) {
    if (edad >= 0) {
      this.edad = edad;
      System.out.println(edad);
    } else{
      System.out.println("pone bien la edad mono");
    }
  }
}


Personas persona1 = new Personas("seba", 28);
persona1.saludar();
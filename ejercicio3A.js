class ticketManager {
  #eventos; //Aca solamente estoy creando una variable privada llamada "eventos"
  #precioBaseDeGanancia;

  constructor() {//Por lo general se tiende a que todos los atributos se inicialicen adentro del constructor
    this.eventos = []; //aca estoy inicializando la variable con un array vacio
    this.#precioBaseDeGanancia = 0,15;
  }

  getEventos() {//Estoy creando un evento llamado "getEventos"
    console.log(this.#eventos);
  }

  agregarEvento(nombre, lugar, precio, capacidad = 50){ //"capacidad = 50" por defecto le signo 50 a capacidad
    const evento = {
      id: this. eventos.length + 1,
      nombre,
      lugar,
      precio,
      capacidad,
      fecha: new Date(),
      participantes: []
    }
  }
}
const datosBasicos = {
  nombre: "seba",
  apellido: "rios",
  edad:28
};

const datosGenerales = {
  educacion: "ing",
  novia: "si"
};

const datosCompletos = {...datosBasicos, ...datosGenerales};
console.log(datosCompletos);

const {nombre, ...resto} = datosCompletos;
console.log(resto)
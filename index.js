const { registrar, leer, vaciar } = require("./operaciones");

const [operacion, nombre, edad, animal, color, enfermedad] =
  process.argv.slice(2);

if (operacion.trim().toLowerCase() === "registrar") {
  registrar(nombre, edad, animal, color, enfermedad);
  console.log(`Cita agendada con éxito para: ${nombre}`);
}
if (operacion.trim().toLowerCase() === "leer") {
  let citasAgendadas = leer();
  console.log(`Cita(s) agendadas: ${citasAgendadas}`);
}
if (operacion.trim().toLowerCase() === "vaciar") {
  let estadoAdenda = vaciar();
  console.log(estadoAdenda);
}

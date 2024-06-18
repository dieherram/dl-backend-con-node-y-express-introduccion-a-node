const fs = require("fs");

const registrar = (nombre, edad, animal, color, enfermedad) => {
  try {
    const agendaDeCitasString = leer();
    const agendaDeCitasJson = JSON.parse(agendaDeCitasString);
    const nuevaCita = {
      nombre: nombre,
      edad: edad,
      animal: animal,
      color: color,
      enfermedad: enfermedad,
    };
    agendaDeCitasJson.push(nuevaCita);
    fs.writeFileSync("citas.json", JSON.stringify(agendaDeCitasJson));
  } catch (error) {
    console.log(`Error al intentar registrar la nueva cita: ${error}`);
  }
};

const leer = () => {
  try {
    const citasAgendadas = fs.readFileSync("citas.json", "utf8");
    return citasAgendadas.toString();
  } catch (error) {
    console.log(`Error al leer la información: ${error}`);
  }
};

const vaciar = () => {
  try {
    fs.writeFileSync("citas.json", "[]");
    return "Han sido eliminadas todas las citas agendadas";
  } catch (error) {
    console.log(`Error al intentar vaciar la agenda de citas: ${error}`);
  }
};

module.exports = { registrar, leer, vaciar };

# Desafío - Veterinaria Js

En este desafío, he desarrollado una pequeña aplicación backend que registra las horas de atención en una veterinaria utilizando Node.js.

## Descripción 📋

El desafío consiste en crear una aplicación que permita registrar y leer citas de atención veterinaria. La aplicación debe interactuar con archivos de sistema para guardar y recuperar los datos.

### Archivos del Proyecto 📂

- **index.js**: Archivo principal que se ejecuta para interactuar con la aplicación. Importa las operaciones de registro y lectura de citas.
- **operaciones.js**: Contiene las funciones para registrar y leer las citas.
- **citas.json**: Archivo JSON que guarda un arreglo de citas.

### Funcionalidades 🔧

- **Registrar Cita**: Agrega una nueva cita con los detalles del animal.
- **Leer Citas**: Muestra todas las citas registradas.
- **Vaciar Citas**: Elimina todas las citas registradas (función adicional implementada).

## Requerimientos del Desafío 🎯

1. Ejecutar scripts con Node.js desde la terminal (2 Puntos).
2. Crear archivos con el módulo File System (3 Puntos).
3. Leer archivos con el módulo File System (2 Puntos).
4. Importar y exportar módulos en Node.js (1 Punto).
5. Utilizar argumentos escritos por línea de comandos (2 Puntos).

## Uso de la Aplicación 🚀

Para interactuar con la aplicación, se deben pasar argumentos por línea de comando especificando la función que se desea ejecutar:

```bash
node index.js registrar Benito "2 años" perro blanco vomitos
node index.js leer
node index.js vaciar
```

### Ejemplos de Uso 📖

- **Registrar una Cita**:
  ```bash
  node index.js registrar Benito "2 años" perro blanco vomitos
  ```
  Esto agregará una nueva cita con los detalles proporcionados.

- **Leer las Citas Registradas**:
  ```bash
  node index.js leer
  ```
  Esto mostrará por consola todas las citas registradas.

- **Vaciar las Citas**:
  ```bash
  node index.js vaciar
  ```
  Esto eliminará todas las citas registradas.

## Código 🧩

### index.js

```javascript
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
```

### operaciones.js

```javascript
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
```

### citas.json

```json
[]
```

## Tecnologías Utilizadas 💻

- Node.js
- File System (fs)

## Mejoras Futuras 🚀

Para futuras iteraciones, planeo:

- Implementar validaciones más estrictas para los datos de entrada.
- Crear una interfaz de usuario simple para facilitar la interacción.
- Agregar funcionalidad de búsqueda y filtrado de citas.
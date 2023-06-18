import { Persona } from './Persona';
import { Direccion } from './Direccion';
import { Telefono } from './Telefono';
import { Mail } from './Mail';

  // var persona1: Persona = new Persona('Nicole', 'Guilla', 28, '26738292T', new Date("1994-08-05"),
  //   'Rojo', 'Femenino', [new Direccion('Calle Doña', 6, 11, 'B', '29006', 'Malaga', 'Malaga')],
  //   [new Mail('Personal', 'mimail@gmail.com')], [new Telefono('Trabajo', '2345678909')], 'Ninguna'
  // );

  // var persona2: Persona = new Persona('Gonzalo', 'Guilla', 32, '267338475U', new Date("1990-12-02"),
  // 'Rojo', 'Masculino', [new Direccion('Calle Huerta', 64, 4, 'A', '29010', 'Malaga', 'Malaga')],
  // [new Mail('Personal', 'gonzamail@gmail.com')], [new Telefono('Casa', '453543532')], 'Ninguna'
  // );

  // var persona3: Persona = new Persona('Hector', 'Guilla', 34, '267338475U', new Date("1990-12-02"),
  // 'Rojo', 'Masculino', [new Direccion('Calle Rojas', 25, 6, 'A', '29005', 'Malaga', 'Malaga')],
  // [new Mail('Personal', 'hectormail@gmail.com')], [new Telefono('Trabajo', '32323554')], 'Ninguna'
  // );

// Crear registros de personas
const direccion1 = new Direccion("Calle Principal", 123, 1, "A", "12345", "Ciudad1", "Provincia1");
const direccion2 = new Direccion("Calle Secundaria", 456, 2, "B", "67890", "Ciudad2", "Provincia2");
const direccion3 = new Direccion("Calle Terciaria", 789, 3, "C", "54321", "Ciudad3", "Provincia3");

const mail1 = new Mail("Personal", "correo1@example.com");
const mail2 = new Mail("Trabajo", "correo2@example.com");
const mail3 = new Mail("Otro", "correo3@example.com");

const telefono1 = new Telefono("Móvil", "123456789");
const telefono2 = new Telefono("Casa", "987654321");
const telefono3 = new Telefono("Trabajo", "555555555");

const persona1 = new Persona(
  "Juan",
  "Pérez",
  30,
  "12345678A",
  new Date(1993, 0, 1),
  "Azul",
  "Masculino",
  [direccion1],
  [mail1],
  [telefono1],
  ""
);

const persona2 = new Persona(
  "María",
  "Gómez",
  25,
  "87654321B",
  new Date(1998, 5, 15),
  "Rojo",
  "Femenino",
  [direccion2],
  [mail2],
  [telefono2],
  ""
);

const persona3 = new Persona(
  "Pedro",
  "López",
  35,
  "56789012C",
  new Date(1988, 8, 10),
  "Verde",
  "Masculino",
  [direccion3],
  [mail3],
  [telefono3],
  ""
);

// Mostrar los registros originales en la consola
console.log("Registros originales:");
console.log("Persona 1:");
console.log(persona1);
console.log("Persona 2:");
console.log(persona2);
console.log("Persona 3:");
console.log(persona3);

// Modificar uno de los registros por DNI
const dniBusqueda = "56789012C";
let personaModificar: Persona | undefined;

for (const persona of [persona1, persona2, persona3]) {
  if (persona.dni === dniBusqueda) {
    personaModificar = persona;
    break;
  }
}

if (personaModificar) {
  // Añadir nueva dirección
  const nuevaDireccion = new Direccion(
    "Calle Nueva",
    999,
    4,
    "D",
    "00000",
    "Ciudad4",
    "Provincia4"
  );
  personaModificar.direcciones.push(nuevaDireccion);

  // Añadir nuevo mail
  const nuevoMail = new Mail("Personal", "correo4@example.com");
  personaModificar.mails.push(nuevoMail);

  // Añadir nuevo teléfono
  const nuevoTelefono = new Telefono("Móvil", "999999999");
  personaModificar.telefonos.push(nuevoTelefono);
}

// Mostrar los registros actualizados en la consola
console.log("Registros actualizados:");
console.log("Persona 1:");
console.log(persona1);
console.log("Persona 2:");
console.log(persona2);
console.log("Persona 3:");
console.log(persona3);


"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Persona_1 = require("./Persona");
var Direccion_1 = require("./Direccion");
var Telefono_1 = require("./Telefono");
var Mail_1 = require("./Mail");
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
var direccion1 = new Direccion_1.Direccion("Calle Principal", 123, 1, "A", "12345", "Ciudad1", "Provincia1");
var direccion2 = new Direccion_1.Direccion("Calle Secundaria", 456, 2, "B", "67890", "Ciudad2", "Provincia2");
var direccion3 = new Direccion_1.Direccion("Calle Terciaria", 789, 3, "C", "54321", "Ciudad3", "Provincia3");
var mail1 = new Mail_1.Mail("Personal", "correo1@example.com");
var mail2 = new Mail_1.Mail("Trabajo", "correo2@example.com");
var mail3 = new Mail_1.Mail("Otro", "correo3@example.com");
var telefono1 = new Telefono_1.Telefono("Móvil", "123456789");
var telefono2 = new Telefono_1.Telefono("Casa", "987654321");
var telefono3 = new Telefono_1.Telefono("Trabajo", "555555555");
var persona1 = new Persona_1.Persona("Juan", "Pérez", 30, "12345678A", new Date(1993, 0, 1), "Azul", "Masculino", [direccion1], [mail1], [telefono1], "");
var persona2 = new Persona_1.Persona("María", "Gómez", 25, "87654321B", new Date(1998, 5, 15), "Rojo", "Femenino", [direccion2], [mail2], [telefono2], "");
var persona3 = new Persona_1.Persona("Pedro", "López", 35, "56789012C", new Date(1988, 8, 10), "Verde", "Masculino", [direccion3], [mail3], [telefono3], "");
// Mostrar los registros originales en la consola
console.log("Registros originales:");
console.log("Persona 1:");
console.log(persona1);
console.log("Persona 2:");
console.log(persona2);
console.log("Persona 3:");
console.log(persona3);
// Modificar uno de los registros por DNI
var dniBusqueda = "56789012C";
var personaModificar;
for (var _i = 0, _a = [persona1, persona2, persona3]; _i < _a.length; _i++) {
    var persona = _a[_i];
    if (persona.dni === dniBusqueda) {
        personaModificar = persona;
        break;
    }
}
if (personaModificar) {
    // Añadir nueva dirección
    var nuevaDireccion = new Direccion_1.Direccion("Calle Nueva", 999, 4, "D", "00000", "Ciudad4", "Provincia4");
    personaModificar.direcciones.push(nuevaDireccion);
    // Añadir nuevo mail
    var nuevoMail = new Mail_1.Mail("Personal", "correo4@example.com");
    personaModificar.mails.push(nuevoMail);
    // Añadir nuevo teléfono
    var nuevoTelefono = new Telefono_1.Telefono("Móvil", "999999999");
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

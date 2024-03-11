"use strict";
//tipos de datos
//string
const nombre = 'Diego';
const ciudad = 'Pontevedra';
const edad = 33;
console.log('El nombre es: ', nombre, 'y la ciudad es: ', ciudad, 'y la edad es: ', edad);
//arrays con string
const personas = ['Diego', 'Pablo', 'Jorge'];
personas.push('Marta');
console.log(personas);
//arrays con numbers
const edadPersonas = [33, 30, 31];
edadPersonas.push(15);
console.log(personas);
//tuplas:
//como la tupla es fija no tiene sentido hacer push, osea añadir algo en el array porque no lo va a poder leer
const pelicula = ['Harry Potter', true, 1997];
//Enum - enumeración
//no es un objeto pero lo parece, es una forma de objeto pero de solo lectura no lo puedo modificar
var datosPersonales;
(function (datosPersonales) {
    datosPersonales["nombre"] = "Diego";
    datosPersonales[datosPersonales["dni"] = 5555555] = "dni";
    datosPersonales["direccion"] = "Calle de la fantas\u00EDa";
    datosPersonales["ciudad"] = "Pontevedra";
})(datosPersonales || (datosPersonales = {}));
console.log(datosPersonales);
//Cast o convertir a otro array
// si por ejemplo estoy cogiendo un dato de una Api pero no sé qué tipo de dato es, y además por lo que sea quiero forzarlo a que sea un string tengo que utilizar Cast
const textoDesconocido = 'esto viene de una petición de una Api o un Ajax';
const fraseFinal = textoDesconocido;
console.log(fraseFinal);

//tipos de datos

//string

const nombre: string = 'Diego';
const ciudad: string = 'Pontevedra';
const edad: string | number = 33;

console.log(
  'El nombre es: ',
  nombre,
  'y la ciudad es: ',
  ciudad,
  'y la edad es: ',
  edad
);

//arrays con string

const personas: string[] = ['Diego', 'Pablo', 'Jorge'];
personas.push('Marta');

console.log(personas);

//arrays con numbers

const edadPersonas: number[] = [33, 30, 31];
edadPersonas.push(15);

console.log(personas);

//tuplas:

//como la tupla es fija no tiene sentido hacer push, osea añadir algo en el array porque no lo va a poder leer

const pelicula: [string, boolean, number] = ['Harry Potter', true, 1997];

//Enum - enumeración

//no es un objeto pero lo parece, es una forma de objeto pero de solo lectura no lo puedo modificar

enum datosPersonales {
  nombre = 'Diego',
  dni = 5555555,
  direccion = 'Calle de la fantasía',
  ciudad = 'Pontevedra',
}

console.log(datosPersonales);

//Cast o convertir a otro array

// si por ejemplo estoy cogiendo un dato de una Api pero no sé qué tipo de dato es, y además por lo que sea quiero forzarlo a que sea un string tengo que utilizar Cast
 
const textoDesconocido: any = 'esto viene de una petición de una Api o un Ajax';
const fraseFinal: string = <string>textoDesconocido;

console.log(fraseFinal);

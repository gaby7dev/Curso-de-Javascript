"use strict";

// Congelar un Objeto para no poderlo modificar
// Para poder congelar un objeto se necesita usar el modo estricto de js. Para ello al inicio de documento se escribe "use strict" y con eso ya se habilita el modo estricto en todo el código.

const producto = {
    nombre: "Monitor 20 Pulgadas",
    precio: 300,
    disponible: true
}
// Utilizando el modo estricto podemos usar el object method "freeze()" para congelar un objeto.

Object.freeze( producto );

// Si ahora queremos modificar el objeto nos dará un error. EJ:
// 1 - reasignado un valor.
// producto.precio = 400;
// 2 - Agregando una nueva propiedad.
// producto.descripcion = "Color negro con pantalla full HD";
// 3 - Eliminando una propiedad.
// delete producto.disponible;

console.log(producto);

// Método para saber si un objeto está congelado o no.
console.log( Object.isFrozen(producto) );
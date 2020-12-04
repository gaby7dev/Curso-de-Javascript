const producto = {
    nombre: "Monitor 20 Pulgadas",
    precio: 300,
    disponible: true
}

// Object Destructuring  (Desestructurando objetos).

// pasar el valor de una propiedad de un objeto a una variable o constante.

const nombreProducto = producto.nombre;

// Js Moderno:

// { nombres de las propiedades a extraer} = nombre del objeto;
const {nombre, precio, disponible} = producto;

console.log( nombre );
console.log( precio );
console.log( disponible );
// Se puede extraer tantos valores mientras existan dentro del objeto.
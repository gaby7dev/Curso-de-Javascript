// Concatenar Strings y Conocer los Templates strings.

const producto = "Monitor 20 pulgadas ";
const precio = "30 USD";

// Método para concatenar strings:
console.log( producto.concat(precio) );
console.log( producto.concat("En descuento") );

// Forma de la versión anterior:
console.log( producto + " con un precio de: " + precio); 
console.log( "EL producto", producto, " con un precio de: ", precio); 

// Forma moderna Templates Strings o Templates Literals:

console.log( `El producto ${producto} con un precio de: ${precio}` );
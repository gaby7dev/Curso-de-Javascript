// Métodos para reemplazar y cortar

const producto = "Monitor 20 pulgadas";

console.log( producto.replace('pulgadas', '"') );
console.log( producto.replace('Monitor', 'Monitor Curvo') );
// El método replace no modifica el valor original, si queremos concervar la modificacíon hay que almacenarla en una variable.

// slice - rebanar

console.log( producto.slice(0, 10) );
console.log( producto.slice(10) );

// substring
console.log( producto.substring(0, 10) );
console.log( producto.substring(10) );

// Diferencia entre slice y substring
console.log( producto.slice(2, 1) ); // Muestra una cadena vacia.
console.log( producto.substring(2, 1) ); // Invierte las posiciones.


// charArt
let nombre = "Gaby";

console.log(nombre.charAt(0));

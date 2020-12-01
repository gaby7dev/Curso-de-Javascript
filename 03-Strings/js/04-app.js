// Cortar espacios en blanco en un String

const producto = "              Monitor 20 pulgadas                ";
// Los espacios cuentan como carácteres.

console.log(producto);
console.log(producto.length);

// Eliminar espacios del Inicio:
console.log( producto.trimStart() );
// Eliminar espacios del Final:
console.log( producto.trimEnd() );

// Utilizando chaining. Dos métodos anidados.
console.log( producto.trimStart().trimEnd() );

// Otra alternativa:
console.log( producto.trim() );

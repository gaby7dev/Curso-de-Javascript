//Métodos para utilizar en los strings

const producto = "Monitor 20 pulgadas";

console.log(producto);

// Conocer la longuitud de un string.
console.log(producto.length); // length es una propiedad, no un método.

// Conocer la posición en la que comienza el carácter o palabra indicada
console.log(producto.indexOf('Monitor'));
console.log(producto.indexOf('perro')); // Si no la encuetra retorna -1

// Conocer SI una palabra o carácter se encuentra en el string retronando true o false.

console.log(producto.includes('Monitor'));
console.log(producto.includes('Tablet'));
console.log(producto.includes('monitor'));

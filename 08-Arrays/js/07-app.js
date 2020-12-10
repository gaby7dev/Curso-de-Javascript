// Eliminar elementos con pop, shift y splice.


const carrito = [];

const producto = {
    nombre: 'Monitor 32 Pulgadas',
    precio: 400
}

const producto2 = {
    nombre: 'Celular',
    precio: 800
}

const producto3 = {
    nombre: 'Teclado',
    precio: 40
}

const producto4 = {
    nombre: 'Mouse',
    precio: 30
}

carrito.push(producto);
carrito.push(producto2);
carrito.unshift(producto3);
carrito.unshift(producto4);


// console.table(carrito);

// ELiminando el último elemento.
carrito.pop(); // delete celular

// console.table(carrito);

// ELiminando el primer elemento.
carrito.shift(); // delete mouse.
// ==============
const carrito2 = [];
carrito2.push(producto);
carrito2.push(producto2);
carrito2.unshift(producto3);
carrito2.unshift(producto4);
console.table(carrito2);

// Utilizando splice para eliminar un elementos.
// splice( índice de donde comenzará a eliminar, la cantidad de elementos a eliminar desde el índice indicado).

carrito2.splice(1, 1); // delete teclado

console.table(carrito2);

carrito2.splice(1, 2); // delete monitor y celular

console.table(carrito2);
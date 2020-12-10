// Añadir nuevos elementos al fin o inicio de un array.

const meses = ['Enero', 'Febrero', 'Marzo'];


// Agregar al final
meses.push('Abril');
meses.push('Mayo')

// console.table(meses);

// Ejemplo 2

const carrito = [];

// Definir un producto

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
// Agrega al final
carrito.push(producto2)
carrito.push(producto);

// Agrega al principio
carrito.unshift(producto3)

console.table(carrito);

// forma imperativa
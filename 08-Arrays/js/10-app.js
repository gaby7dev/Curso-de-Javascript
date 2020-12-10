// .map para iterar un array y su diferencia con forEach

const carrito = [
    {nombre: 'Monitor 27 Pulgadas', precio: 500},
    {nombre: 'Television', precio: 100},
    {nombre: 'Tablet', precio: 200},
    {nombre: 'Audifonos', precio: 300},
    {nombre: 'Teclado', precio: 400},
    {nombre: 'Celular', precio: 700}
];

// for Each
// carrito.forEach( function(producto){
//     console.log(`${producto.nombre} - Precio ${producto.precio}`);
// });

// map
// carrito.map( function(producto){
//     console.log(`${producto.nombre} - Precio ${producto.precio}`);
// });

// map y forEach son sumilares pero map crea un array nuevo con los valores del array iterado

// EJ:
const nuevoCarrito1 = carrito.map( function(producto){
    return `${producto.nombre} - Precio ${producto.precio}`;
});
const nuevoCarrito2 = carrito.forEach( function(producto){
    return `${producto.nombre} - Precio ${producto.precio}`;
});
console.log(nuevoCarrito1);
// ["Monitor 27 Pulgadas - Precio 500", "Television - Precio 100", "Tablet - Precio 200", "Audifonos - Precio 300", "Teclado - Precio 400", "Celular - Precio 700"]

console.log(nuevoCarrito2);
// undefined

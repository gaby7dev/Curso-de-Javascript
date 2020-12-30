// forEach y map
const pendientes = ['Tarea', 'Comer', 'Proyecto', 'Estudiar Javascript'];

pendientes.forEach( (pendiente, index) => {
    console.log(`${index} : ${pendiente}.`);
});

// ================

const carrito = [
    {nombre: 'Monitor 27 Pulgadas', precio: 500},
    {nombre: 'Television', precio: 100},
    {nombre: 'Tablet', precio: 200},
    {nombre: 'Audifonos', precio: 300},
    {nombre: 'Teclado', precio: 400},
    {nombre: 'Celular', precio: 700}
];

carrito.forEach(producto => console.log(producto.nombre));

carrito.map(producto => console.log(producto.nombre));

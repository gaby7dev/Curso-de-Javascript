// For loop

// for(let i = 0; i <= 10; i++){
//     console.log(`Número: ${i}`);
// }

// Indicar los números pares e impares desde el 1 al 20.
// for(let i = 1; i <= 20; i++){
//     if(i % 2 === 0){
//         console.log(`El número ${i} es PAR.`);
//     }else{
//         console.log(`El número ${i} es IMPAR.`);
//     }
// }

const carrito = [
    {nombre: 'Monitor 27 Pulgadas', precio: 500},
    {nombre: 'Television', precio: 100},
    {nombre: 'Tablet', precio: 200},
    {nombre: 'Audifonos', precio: 300},
    {nombre: 'Teclado', precio: 400},
    {nombre: 'Celular', precio: 700}
];

console.log(carrito.length);

for(let i=0 ; i < carrito.length ; i++){
    console.log(carrito[i].nombre);
}
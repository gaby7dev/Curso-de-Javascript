// break y continue en un for loop.

// Recorrer del 1 a 10 y al llegar al N°5 Finalizar la Ejecución del bucle
// for(let i = 0; i <= 10; i++){
//     if(i === 5){
//         console.log('Encontramos el N° 5');
//         break; // break rompe la ejecución del bucle.
//     }
//     console.log(`Número: ${i}`);
// }

// Recorrer del 1 a 10 y al llegar al N°5 Mostrar un msj que diga "Número CINCO" en vez del N°
// for(let i = 0; i <= 10; i++){
//     if(i === 5){
//         console.log('Número CINCO');
//         continue;
//     }
//     console.log(`Número: ${i}`);
// }

// Recorrer el carrito e indicar si algún producto tiene descuento.

const carrito = [
    {nombre: 'Monitor 27 Pulgadas', precio: 500},
    {nombre: 'Television', precio: 100},
    {nombre: 'Tablet', precio: 200, descuento: true},
    {nombre: 'Audifonos', precio: 300},
    {nombre: 'Teclado', precio: 400},
    {nombre: 'Celular', precio: 700}
];

for(let i=0 ; i < carrito.length ; i++){
    if(carrito[i].descuento){
        console.log(`EL artículo ${carrito[i].nombre} Tiene descuento.`);
        continue;
    }
    console.log(carrito[i].nombre);
}
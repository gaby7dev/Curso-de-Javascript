"Use strict";
// Sellar un Objecto
const producto = {
    nombre: "Monitor 20 Pulgadas",
    precio: 300,
    disponible: true
}

Object.seal( producto );
//  La diferencia entre seal vs freeze es que seal no permite eliminar ni agrega un propiedad, pero si permite reasignar valores en propiedades existentes.

producto.disponible = false;

console.log(producto);

// Método para ver si un objeto está sellado.
console.log( Object.isSealed(producto) );
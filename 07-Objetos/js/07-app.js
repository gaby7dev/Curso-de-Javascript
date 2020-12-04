const producto = {
    nombre: "Monitor 20 Pulgadas",
    precio: 300,
    disponible: true
}

console.log(producto);

// Cuando definimos variables con const su valor no se puede reagsinar por otro. Pero con los objetos esto no sucede, por mas que el objeto haya sido creado mediante const, sus valores se pueden reasignar nuevamente o eliminar.

producto.disponible = false;
delete producto.precio;

console.log(producto);
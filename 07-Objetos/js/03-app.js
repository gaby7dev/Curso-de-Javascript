const producto = {
    nombre: "Monitor 20 Pulgadas",
    precio: 300,
    disponible: true
}

//  Como agregar o Eliminar Propiedades de un objeto.

// Agregar nuevas propiedades:
producto.img = 'imagen.jpg'; 
//Si la propiedad ya se encuentra creada dentro del objeto se sobrescribirá su valor.

// Eliminar propiedades del objeto.
delete producto.disponible;

console.log( producto );
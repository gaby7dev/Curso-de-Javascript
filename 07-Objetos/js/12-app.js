// Object Constructor - Otra forma de crear objetos.


// Object Literals:
const producto = {
    nombre: "Monitor 20 Pulgadas",
    precio: 300,
    disponible: true
}

// Object Constructor:

function Producto(nombre, precio){
    this.nombre = nombre;
    this.precio = precio;
    this.disponible = true;
}

const producto2 = new Producto('Monitor 24 Pulgadas', 500);

console.log(producto2);

const producto3 = new Producto('Tablet', 400);
console.log(producto3);

// Los Object Constructor son más dinámicos y nos permiten poder automatizar la creación de objetos.

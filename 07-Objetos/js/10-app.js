// Unir Dos objetos.
const producto = {
    nombre: "Monitor 20 Pulgadas",
    precio: 300,
    disponible: true
}

const medidas = {
    peso: '1kg',
    medida: '1m'
}

console.log(producto);
console.log(medidas);

// forma 1 utilizando el método assign
const resultado = Object.assign( producto, medidas);

console.log(resultado);

// Forma 2 Spread Operator o Rest Operator

const resultado2 = {...producto, ...medidas}

console.log( resultado2 );
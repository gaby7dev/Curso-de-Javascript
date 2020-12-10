// Destruturing de Arrays

const numeros = [10, 20, 30, 40, 50];

// const [primero] = numeros;
// Toma el primer valor del array
// console.log(primero);

// const [primero, segundo] = numeros;
// Toma el primer valor del array

// console.log(primero);
// console.log(segundo);

// const [, , tercero] = numeros;
// Se puede utilizar comas para llegar al valor deseado
// console.log(tercero);

// const [, , tercero, , quinto] = numeros;
// console.log(tercero);
// console.log(quinto);

// accediendo aun valor y almacenando en un array con los elementos restantes
const [primero, segundo, ...deMasElementos] = numeros;

console.log(primero);
console.log(segundo);
console.log(deMasElementos);

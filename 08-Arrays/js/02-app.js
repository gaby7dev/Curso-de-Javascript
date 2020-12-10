// Acceder a los valores del Array.

const numeros = [10, 20, 30, 40, 50, [1, 2, 3]];

console.log(numeros);
console.table(numeros); // Nos permite ver los valores en una tabla con su índice y valor.

console.log(numeros[2]); // >> 30
console.log(numeros[0]); // >> 10
console.log(numeros[20]); // >> undefined
console.log(numeros[5][1]); // >> 2

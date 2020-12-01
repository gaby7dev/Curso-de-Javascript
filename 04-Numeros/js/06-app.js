// Convertir Strings a Números 

const numero1 = "20";
const numero2 = "20.2";
const numero3 = "Uno";
const numero4 = 20;

console.log(numero1);
console.log("Numero 1 a entero:", Number.parseInt(numero1));
console.log("Numero 2 a flotante:", Number.parseFloat(numero2));
console.log("Numero 2 a entero:", Number.parseInt(numero2));
console.log(Number.parseInt(numero3));


// Revisar si un número es entero o no
console.log( Number.isInteger(numero1));
console.log( Number.isInteger(numero4));
console.log( Number.isInteger(numero3));


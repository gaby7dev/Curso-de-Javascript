// Comparar valores

// Operador de comparación flexible " == "
console.log("20 == 30: ", 20 == 30);
console.log("20 == 20: ", 20 == 20);
console.log("20 ==  \"20\": ", 20 == "20");
console.log("20 == \"30\": ", 20 == "30");

// Operador de comparación estricto " === "

console.log("20 === 30: ", 20 === 30);
console.log("20 === 20: ", 20 === 20);
console.log("20 === \"20\": ", 20 === "20");
console.log("20 === \"30\": ", 20 === "30");

/*
El comparador "==" solo compara los valores en cambio el comparador "===" no solo compara el valor, sino su tipo de dato.
*/ 

// Comparador diferente a

const password1 = "admin";
const password2 = "Admin";

console.log( password1 != password2);
console.log( 20 != "20" );
console.log( 20 !== "20" );

// Diferencia entre Función y Método.

const numero1 = 20;
const numero2 = "20";

/* Son básicamente lo mismo. Lo que cambia es el contexto en el que se son utilizadas */ 

console.log( parseInt(numero2) ); // Función
console.log( numero1.toString() ); // Método

function funcionSaludar(nombre){
    console.log(`Hola ${nombre} desde una Función`);
}

const metodo = {
    saludar: function(nombre){
        console.log(`Hola ${nombre} desde un Método`);
    }
}

funcionSaludar('Juan');
metodo.saludar('Juan');

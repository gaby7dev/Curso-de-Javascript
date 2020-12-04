// Destructuring de objetos anidados.

const producto = {
    nombre: "Monitor 20 Pulgadas",
    precio: 300,
    disponible: true,
    informacion: {
        medidas:{
            peso: '1kg',
            medida: '1m'
        },
        fabricacion:{
            pais: 'China',
            ciudad: 'Pekín'
        }
    }
}
// extrayendo el valor de pais
const { informacion: { fabricacion: { pais } } } = producto;
// La única variable que se crea es la de "pais". Información y fabricación son solo indicaciones que se le dá para ingresar al valor deseado.

console.log( pais );

const { informacion: { medidas: { peso, medida } } } = producto;

console.log( peso );
console.log( medida );
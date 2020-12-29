// El operador ternario

const autenticado = true;
const puedePagar = false;

console.log(
    autenticado ? 'Si está autenticado' : 'No está autenticado'
);
// operador ternario anidado.

console.log(
    autenticado ? puedePagar ? 'Si está autenticado y puede pagar' : 'Si está autenticado, pero no puede pagar' : 'No está autenticado'
);

// if(autenticado){
//     if(puedePagar){
//         console.log('Si está autenticado y puede pagar');
//     }else{
//         console.log('Si está autenticado, pero no puede pagar');
//     }
// }else{
//     console.log('No está autenticado');
// }